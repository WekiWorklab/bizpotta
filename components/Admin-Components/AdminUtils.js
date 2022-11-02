import { AdminCourses, AdminHome, AdminInstitutions } from "../../public";

export const SidebarNav = [
    {id: 1, name: "Home", to: "/admin" ,icon: AdminHome()},
    {id: 2, name: "Courses", to: "/admin/courses", icon: AdminCourses()},
    {id: 3, name: "Institutions", to: "/admin/institutions", icon: AdminInstitutions()},
    {id: 4, name: "Students", to: "/admin/students", icon: AdminInstitutions()},
    {id: 5, name: "Instructors", to: "/admin/instructors", icon: AdminCourses()},
    {id: 6, name: "Content Management", to: "/admin/content-management", icon: AdminInstitutions()},
    {id: 7, name: "Support", to: "/admin/support", icon: AdminInstitutions()},
]