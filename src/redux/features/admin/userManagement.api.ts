import { TResponseRedux } from "../../../types";
import { TStudent } from "../../../types/userManagement";
import { baseApi } from "../../api/baseApi";

const userManagementApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllStudents: builder.query({
            query: () => ({
                url: '/students',
                method: 'GET', 
            }),
            transformResponse: (response: TResponseRedux<TStudent[]>) => {
                return {
                    data: response.data,
                }
            }
        }),
        
        addStudent: builder.mutation({
            query: (data) => ({
                url: '/users/create-student',
                method: 'POST',
                body: data,
            })
        })
    })
})

export const { useGetAllStudentsQuery, useAddStudentMutation } = userManagementApi;