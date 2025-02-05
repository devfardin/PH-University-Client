import { TQueryParam, TResponseRedux } from "../../../types";
import { TStudent } from "../../../types/userManagement";
import { baseApi } from "../../api/baseApi";

const userManagementApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllStudents: builder.query({
            query: (args) => {
                const params = new URLSearchParams();
                if(args) {
                    args.forEach((item: TQueryParam) => {
                        params.append(item.name, item.value as string)
                    });
                }
                return {
                    url: '/students',
                    method: 'GET',
                    params: params,
                }
            },
            transformResponse: (response: TResponseRedux<TStudent[]>) => {
                return {
                    data: response.data,
                    meta: response.meta
                }
            }
        }),
        addStudent: builder.mutation({
            query: (data) => ({
                url: 'users/create-student',
                method: 'POST',
                body: data,
            } 
        )
        }),
        blockedUser: builder.mutation({
            query: (data) => (
                {
                url: `users/change-status/${data}`,
                method: 'PUT',
                body: { status: 'blocked' },
            })
        }),
    })
})

export const { useGetAllStudentsQuery, useAddStudentMutation, useBlockedUserMutation } = userManagementApi;