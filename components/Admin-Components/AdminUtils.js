import moment from "moment";
import { AdminCourses, AdminHome, AdminInstitutions } from "../../public";

export const SidebarNav = [
    {id: 1, name: "Home", to: "/admin" ,icon: AdminHome()},
    {id: 2, name: "Courses", to: "/admin/courses", icon: AdminCourses()},
    {id: 3, name: "Institutions", to: "/admin/institutions", icon: AdminInstitutions()},
    {id: 4, name: "Students", to: "/admin/students", icon: AdminInstitutions()},
    {id: 5, name: "Instructors", to: "/admin/instructors", icon: AdminCourses()},
    {id: 6, name: "Content Management", to: "/admin/content-management", icon: AdminInstitutions()},
    {id: 7, name: "Support", to: "/admin/support", icon: AdminInstitutions()},
    {id: 8, name: "Live Session Requests", to: "/admin/live-session", icon: AdminInstitutions()},

]


export const mockData = [
    {serial: 1, name_of_mentor: "David", email: "david@gmail.com", title_of_event: "Next js", price: 50, date_and_time: moment((Date.now() + 10000000)).format('MMMM Do YYYY, h:mm:ss a')},
    {serial: 2, name_of_mentor: "David", email: "david@gmail.com", title_of_event: "Next js", price: 50, date_and_time: moment((Date.now() + 30000000)).format('MMMM Do YYYY, h:mm:ss a')},
    {serial: 3, name_of_mentor: "David", email: "david@gmail.com", title_of_event: "Next js", price: 50, date_and_time: moment((Date.now() + 50000000)).format('MMMM Do YYYY, h:mm:ss a')},
    {serial: 4, name_of_mentor: "David", email: "david@gmail.com", title_of_event: "Next js", price: 50, date_and_time: moment((Date.now() + 100000000)).format('MMMM Do YYYY, h:mm:ss a')},
    {serial: 5, name_of_mentor: "David", email: "david@gmail.com", title_of_event: "Next js", price: 50, date_and_time: moment((Date.now() + 200000000)).format('MMMM Do YYYY, h:mm:ss a')},
]