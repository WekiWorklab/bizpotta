import { useRouter } from "next/router";
import React, { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { AiOutlineFilePdf, AiOutlineVideoCamera } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { setQuizArray } from "../../../../store/courseSlice";
import { TextEditor } from "../../../TextEditor";
import { TextEditorNotesModal } from "./TextEditorNotesModal";
import useCourse from "../../../../hooks/useCourse";
import { Button, WButton } from "../../../Auth-Components/Button";

const EditWeek = () => {
  const router = useRouter();
  const API_KEY = process.env.NEXT_PUBLIC_TINY_API_KEY;

  const { courseId, week_no, week_title } = router.query;

  return (
    <div className="relative w-full min-h-screen bg-[#FDFDFD] flex flex-col mt-[90px] md:mt-[120px] md:justify-start items-start md:translate-x-[250px] md:w-[calc(100%-250px)] px-2 xl:px-16 py-10 text-darkGray">
      {router.query.type === "lecture" && <LectureEdit API_KEY={API_KEY} courseId={courseId} weekId={week_no} week_title={week_title} />}
      {router.query.type === "assignment" && <AssignmentEdit API_KEY={API_KEY} courseId={courseId} weekId={week_no} week_title={week_title} />}
      {router.query.type === "resource" && <ResourceEdit API_KEY={API_KEY} courseId={courseId} weekId={week_no} week_title={week_title} />}
      {router.query.type === "quiz" && <QuizEdit API_KEY={API_KEY} courseId={courseId} weekId={week_no} week_title={week_title} />}
    </div>
  );
};

export default EditWeek;

const QuizEdit = ({}) => {
  const quiz_no = useSelector((state) => state.course.quiz_array);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const { handleCreateQuiz } = useCourse();
  const router = useRouter();

  const [quiz_data, setQuizQuestions] = useState({});
  const [quiz_options, setQuizOptions] = useState({});
  const [quiz_correct, setQuizCorrect] = useState({});

  const [finalData, setFinalData] = useState([]);

  const AddQuestion = () => {
    const num = quiz_no.length + 1;

    if (quiz_no.length <= 9) {
      dispatch(setQuizArray());
      setQuizQuestions((prev) => ({
        ...prev,
        [`question${num}`]: "",
      }));
      setQuizOptions((prev) => ({
        ...prev,
        [`optionA${num}`]: "",
        [`optionB${num}`]: "",
        [`optionC${num}`]: "",
        [`optionD${num}`]: "",
      }));
      setQuizCorrect((prev) => ({
        ...prev,
        [`correct${num}`]: "",
      }));
    } else return;
  };

  const SaveChanges = () => {
    let data = [];

    for (let i = 1; i <= quiz_no.length; i++) {
      const questionObj = { question: "", options: [] };

      //Enter the question
      for (let [key, value] of Object.entries(quiz_data)) {
        if (key[key.length - 1] == i) {
          questionObj.question = value;
        }
      }

      // Enter the options
      for (let [key, value] of Object.entries(quiz_options)) {
        if (key[key.length - 1] == i) {
          for (let [k, v] of Object.entries(quiz_correct)) {
            if (k[k.length - 1] == i) {
              if (key[key.length - 2] == v) {
                questionObj.options.push({
                  name: value,
                  isCorrect: true,
                });
              } else {
                questionObj.options.push({
                  name: value,
                  isCorrect: false,
                });
              }
            }
          }
        }
      }

      data.push(questionObj);
    }

    console.log(data);

    setFinalData(...data);

    setLoading(true);

    let quizData = {
      course_id: router.query.courseId,
      week_no: router.query.week_no,
      week_title: router.query.week_title,
      quizData: data,
    };

    setTimeout(() => {
      handleCreateQuiz(quizData, setLoading)
        .then((res) => {
          router.push(`/creators/courses/create?courseId=${router.query.courseId}`);
        })
        .catch((err) => {
          toast.error("Something went wrong");
        })
        .finally(() => {
          setLoading(false);
        });
    }, 1000);
  };

  const HandleQuestionsChange = (e) => {
    const { name, value } = e.target;
    setQuizQuestions((prev) => ({ ...prev, [name]: value }));
  };

  const HandleOptionsChange = (e) => {
    const { name, value } = e.target;
    setQuizOptions((prev) => ({ ...prev, [name]: value }));
  };

  const HandleCorrectChange = (e) => {
    const { name, value } = e.target;
    setQuizCorrect((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="w-full">
      <p className="text-[14px] font-bold">Quiz</p>

      <form>
        {quiz_no.map((el, index) => (
          <Quiz key={index} quiz_num={index + 1} quiz_data={quiz_data} HandleQuestionsChange={HandleQuestionsChange} HandleOptionsChange={HandleOptionsChange} HandleCorrectChange={HandleCorrectChange} />
        ))}
      </form>

      <div className="mt-6 flex justify-between items-center">
        <Button className="w-full md:w-[120px] h-[40px] centerFlex bg-darkBlue text-white text-[13px] font-bold rounded-md cursor-pointer mt-16" type="button" onClick={AddQuestion} name={`Add question ${quiz_no.length + 1}`} size={"w-[120px] mt-10"} />

        <WButton className="w-full md:w-[120px] h-[40px] centerFlex bg-darkBlue text-white text-[13px] font-bold rounded-md cursor-pointer mt-16" type="button" onClick={SaveChanges} name={"Submit"} size={"w-[120px] mt-10"} loading={loading} />
      </div>
    </div>
  );
};

const Quiz = ({ quiz_num, quiz_data, HandleCorrectChange, HandleOptionsChange, HandleQuestionsChange }) => {
  const optionsArr = ["A", "B", "C", "D"];

  return (
    <div className="w-full mt-16">
      <p className="text-[14px] text-darkBlue">Question {quiz_num}</p>

      <textarea className="w-full min-h-[150px] text-[14px] inputField" name={`question${quiz_num}`} onChange={(e) => HandleQuestionsChange(e)} value={quiz_data[`question${quiz_num}`]} required />

      {optionsArr.map((el, index) => (
        <div key={index} className="flex items-center gap-x-3">
          <p className="text-[14px]">{el}:</p>
          <input name={`option${el}${quiz_num}`} required className="h-[40px] pl-2 mt-2 w-[320px] text-[14px] inputField" onChange={(e) => HandleOptionsChange(e)} />
        </div>
      ))}

      <div className="mt-5">
        <p className="text-[13px]">Please select the correct option</p>
        <select
          className="outline-0 focus:ring-0 ring-0 text-[14px] rounded-md"
          required
          defaultValue="A"
          name={`correct${quiz_num}`}
          onChange={(e) => {
            HandleCorrectChange(e);
          }}>
          <option value="A">Option A</option>
          <option value="B">Option B</option>
          <option value="C">Option C</option>
          <option value="D">Option D</option>
        </select>
      </div>
    </div>
  );
};

const ResourceEdit = ({ API_KEY, courseId, weekId, week_title }) => {
  const router = useRouter();
  const { handleCreateResource } = useCourse();
  const [loading, setLoading] = useState(false);
  const [inputValue, setInputValue] = useState({
    value1: "",
    value2: "",
    value3: "",
    value4: "",
    value5: "",
  });
  const [textValue, setTextValue] = useState("");
  const [file, setFile] = useState([]);
  const [counter, setCounter] = useState(1);
  const uploadFileRef = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddLinks = () => {
    setCounter((prev) => prev + 1);
  };

  const handleSubmitResource = () => {
    if (!textValue) return toast.error("Please enter the resource message");
    if (!file.length) return toast.error("Please upload the resource file");

    let images = [];

    file.forEach((el) => {
      images.push(el);
    });
    setLoading(true);
    const data = {
      description: textValue,
      files: [...images],
      links: [{ link: inputValue.value1 }, { link: inputValue.value3 }, { link: inputValue.value2 }, { link: inputValue.value3 }, { link: inputValue.value5 }],
    };

    const formData = new FormData();

    // formData.append("files", data.files);
    for (let i = 0; i < data.files.length; i++) {
      formData.append("files[]", file[i]);
    }

    formData.append("description", textValue);
    formData.append("links", JSON.stringify(data.links));
    formData.append("courseId", courseId);
    formData.append("weekId", weekId);
    formData.append("week_title", week_title);

    handleCreateResource(formData, setLoading)
      .then(() => {
        router.push(`/creators/courses/create?courseId=${courseId}`);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const addFile = (e) => {
    e.preventDefault();
    // upload multiple files
    for (let i = 0; i < e.target.files.length; i++) {
      setFile((prev) => [...prev, e.target.files[i]]);
    }
  };

  return (
    <div className="w-full">
      <p className="text-[14px] font-bold">Resources</p>

      <div className="min-h-400px mt-7">
        <TextEditorNotesModal api_key={API_KEY} setValue={setTextValue} />
      </div>

      <label htmlFor="file" className="mt-5 flex w-[300px] h-[40px] inputField items-center gap-x-3 px-2 cursor-pointer">
        <AiOutlineFilePdf color="gray" size={24} />
        <p className="mt-[0.5px] text-[13px] text-[#999999]">{!file.length > 0 ? "Click to upload multiple resource files" : ` You have uploaded ${file.length} files`}</p>
        <input type="file" id="file" multiple name="file[]" accept=".pdf, .docx, .pptx, .xslx, .png, .jpeg" className="hidden" onChange={(e) => addFile(e)} ref={uploadFileRef} />
      </label>

      <p className="text-[#999999] text-[13px] mt-8">Links to other resources go here</p>
      <div className=" grid gird-cols-1">
        <input type="text" className="inputField w-[320px] sm:min-w-[400px] mt-6" value={inputValue?.value1} name="value1" onChange={(e) => handleChange(e)} placeholder="paste link here" />

        {counter > 1 && <input type="text" className="inputField w-[320px] sm:min-w-[400px] mt-6" value={inputValue?.value2} name="value2" onChange={(e) => handleChange(e)} placeholder="paste link here" />}

        {counter > 2 && <input type="text" className="inputField w-[320px] sm:min-w-[400px] mt-6" value={inputValue?.value3} name="value3" onChange={(e) => handleChange(e)} placeholder="paste link here" />}

        {counter > 3 && <input type="text" className="inputField w-[320px] sm:min-w-[400px] mt-6" value={inputValue?.value4} name="value4" onChange={(e) => handleChange(e)} placeholder="paste link here" />}

        {counter > 4 && <input type="text" className="inputField w-[320px] sm:min-w-[400px] mt-6" value={inputValue?.value5} name="value5" onChange={(e) => handleChange(e)} placeholder="paste link here" />}

        <div className="text-darkBlue text-[13px] cursor-pointer mt-3" onClick={() => handleAddLinks()}>
          + add another link
        </div>
      </div>

      <Button type="button" onClick={handleSubmitResource} name={" Save changes"} size={"w-[120px] mt-16"} loading={loading}>
        Save changes
      </Button>
    </div>
  );
};

const AssignmentEdit = ({ API_KEY, courseId, weekId, week_title }) => {
  const [textValue, setTextValue] = useState("");
  const [loading, setLoading] = useState(false);
  const { handleCreateAssignment } = useCourse();
  const router = useRouter();

  const handleSubmitAssignment = async () => {
    if (textValue === "") {
      toast.error("Please enter a assignment note");
      return;
    }

    let data = {
      course_id: courseId,
      week_no: weekId,
      assignment_note: textValue,
      week_title: week_title,
    };

    handleCreateAssignment(data, setLoading)
      .then(() => {
        router.push(`/creators/courses/create?courseId=${courseId}`);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="w-full">
      <p className="text-[14px] font-bold">Assignment</p>
      <div className="min-h-400px mt-7">
        <TextEditorNotesModal api_key={API_KEY} setValue={setTextValue} />
      </div>

      <Button className="w-full md:w-[120px] h-[40px] centerFlex bg-darkBlue text-white text-[13px] font-bold rounded-md cursor-pointer mt-16" type="button" onClick={handleSubmitAssignment} name={"Save changes"} size={"mt-16 w-[120px]"} loading={loading} />
    </div>
  );
};

const LectureEdit = ({ API_KEY, courseId, weekId, week_title }) => {
  const router = useRouter();
  const [textValue, setTextValue] = useState("");
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const { handleCreatelecture } = useCourse();

  const handleSubmitLecture = async () => {
    if (textValue === "") {
      toast.error("Please enter a lecture note");
      return;
    }
    if (url === "") {
      toast.error("Please add a video url");
      return;
    }

    let data = {
      course_id: courseId,
      week_no: weekId,
      lecture_note: textValue,
      video_url: url,
      week_title: week_title,
    };

    handleCreatelecture(data, setLoading)
      .then(() => {
        router.push(`/creators/courses/create?courseId=${courseId}`);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="w-full">
      <p className="text-[14px] font-bold">Lecture</p>
      <div className="min-h-400px mt-7">
        <TextEditorNotesModal api_key={API_KEY} setValue={setTextValue} />
      </div>
      <input type="text" className="w-[300px] h-[40px] inputField mt-10" value={url} onChange={(e) => setUrl(e.target.value)} />
      <p className="text-[12px] text-gray-400 mt-3">Paste video link here</p>
      <br />

      <Button className="w-full md:w-[120px] h-[40px] centerFlex bg-darkBlue text-white text-[13px] font-bold rounded-md cursor-pointer mt-16" type="button" onClick={handleSubmitLecture} name={" Save changes"} size={"w-[120px]"} loading={loading}>
        Save changes
      </Button>
    </div>
  );
};
