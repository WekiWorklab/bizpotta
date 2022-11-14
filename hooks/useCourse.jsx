import useNotification from "./useNotification";
import CreatorService from "../services/CreatorService";
import learnersService from "../services/LearnersService";

const useCourse = () => {
  const { handleError, handleSuccess } = useNotification();

  const handleSaveCourse = (course_id, setShowLoader) => {
    return new Promise((resolve) => {
      setShowLoader(true);

      CreatorService.saveCourse(course_id)
        .then((res) => {
          handleSuccess(res?.message);
          resolve(res?.data);
        })
        .catch((error) => {
          handleError(error);
        })
        .finally(() => {
          setShowLoader(false);
        });
    });
  };

  const handleCreatelecture = (data, setShowLoader) => {
    return new Promise((resolve) => {
      setShowLoader(true);

      CreatorService.createLecture(data)
        .then((res) => {
          handleSuccess(res?.message);
          resolve(res?.data);
        })
        .catch((error) => {
          handleError(error);
        })
        .finally(() => {
          setShowLoader(false);
        });
    });
  };
  const handleCreateResource = (data, setShowLoader) => {
    return new Promise((resolve) => {
      setShowLoader(true);

      CreatorService.createResource(data)
        .then((res) => {
          handleSuccess(res?.message);
          resolve(res?.data);
        })
        .catch((error) => {
          handleError(error);
        })
        .finally(() => {
          setShowLoader(false);
        });
    });
  };
  const handleCreateQuiz = (data, setShowLoader) => {
    return new Promise((resolve) => {
      setShowLoader(true);

      CreatorService.createQuiz(data)
        .then((res) => {
          handleSuccess(res?.message);
          resolve(res?.data);
        })
        .catch((error) => {
          handleError(error);
        })
        .finally(() => {
          setShowLoader(false);
        });
    });
  };
  const handleCreateAssignment = (data, setShowLoader) => {
    return new Promise((resolve) => {
      setShowLoader(true);

      CreatorService.createAssignment(data)
        .then((res) => {
          handleSuccess(res?.message);
          resolve(res?.data);
        })
        .catch((error) => {
          handleError(error);
        })
        .finally(() => {
          setShowLoader(false);
        });
    });
  };

  const handleCreateCourseProject = (data, setShowLoader) => {
    return new Promise((resolve) => {
      setShowLoader(true);

      CreatorService.createProject(data)
        .then((res) => {
          handleSuccess(res?.message);
          resolve(res?.data);
        })
        .catch((error) => {
          handleError(error);
        })
        .finally(() => {
          setShowLoader(false);
        });
    });
  };

  const purchaseCourse = (data, setShowLoader) => {
    return new Promise((resolve) => {
      setShowLoader(true);

      learnersService
        .purchaseCourse(data)
        .then((res) => {
          handleSuccess(res?.message);
          resolve(res?.data);
        })
        .catch((error) => {
          handleError(error);
        })
        .finally(() => {
          setShowLoader(false);
        });
    });
  };

  const purchasedCourse = (data, setShowLoader) => {
    return new Promise((resolve) => {
      setShowLoader(true);

      learnersService
        .purchasedCourse(data)
        .then((res) => {
          handleSuccess(res?.message);
          resolve(res?.data);
        })
        .catch((error) => {
          handleError(error);
        })
        .finally(() => {
          setShowLoader(false);
        });
    });
  };

  const purchaseCourseFailed = (data, setShowLoader) => {
    return new Promise((resolve) => {
      setShowLoader(true);

      learnersService
        .purchaseCourseFailed(data)
        .then((res) => {
          handleError(res?.message);
          resolve(res?.data);
        })
        .catch((error) => {
          handleError(error);
        })
        .finally(() => {
          setShowLoader(false);
        });
    });
  };

  const getMyCourses = () => {
    return new Promise((resolve) => {
      learnersService
        .getMyCourses()
        .then((res) => {
          // handleSuccess(res?.message);
          resolve(res?.data);
        })
        .catch((error) => {
          handleError(error);
        });
    });
  };

  const getMyCourse = (id) => {
    return new Promise((resolve, reject) => {
      learnersService
        .getMyCourse(id)
        .then((res) => {
          // handleSuccess(res?.message);
          resolve(res?.data);
        })
        .catch((error) => {
          reject(error);
          // handleError(error);
        });
    });
  };

  const getLiveSessions = () => {
    return new Promise((resolve, reject) => {
      learnersService.getLiveSessions()
      .then(res => { resolve(res.data) })
      .catch((error) => {
        reject(error)
      })
    })
  }

  const getLiveSession = (id) => {
    return new Promise((resolve, reject) => {
      learnersService.getLiveSession(id)
      .then((res) => resolve(res.data))
      .catch((error) => {
        reject(error)
      })
    })
  }

  // the sequence here is different from other fxns. Was just trying smth new
  // const getLiveSession = (id) => {
  //   return new Promise((resolve, reject) => {
  //     const res = learnersService.getLiveSession(id)
  //     if (res) {
  //       // console.log(res)
  //       resolve(res)
  //     }
  //     else {
  //       reject("there is an error")
  //     }
  //   })
  // }


  return {
    handleCreatelecture,
    purchaseCourse,
    purchasedCourse,
    purchaseCourseFailed,
    getMyCourses,
    getMyCourse,
    getLiveSessions,
    getLiveSession,
    handleCreateResource,
    handleCreateQuiz,
    handleCreateAssignment,
    handleSaveCourse,
    handleCreateCourseProject,
  };
};

export default useCourse;
