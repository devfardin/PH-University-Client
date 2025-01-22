import { TQueryParam, TResponseRedux } from "../../../types";
import { TAcademicSemester } from "../../../types/academicManagement";
import { baseApi } from "../../api/baseApi";

const academicManagementApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllAcademicSemesters: builder.query({
            query: (args) =>{
                const params = new URLSearchParams();
                if(args) {
                   args.forEach((item: TQueryParam) => {
                    params.append(item?.name, item?.value as string)
                   });
                }
                return {
                    url: '/academic-semesters',
                    method: 'GET',
                    params: params,
                }
            },
            transformResponse: (response: TResponseRedux<TAcademicSemester[]>) => {
                return {
                    data: response.data,
                    meta: response.meta,
                };
            }
        }),
        getAllDepartment: builder.query({
            query: () => ({
                url: '/academic-departments',
                method: 'GET',
            }),
            transformResponse: (response: TResponseRedux<TAcademicSemester[]>) => {
                return {
                    data: response.data,
                }
            }
        }),
        AddAcademicSemestet: builder.mutation({
            query: (data) => ({
                url: 'academic-semesters/create-academic-semester',
                method: 'POST',
                body: data,
            }),
        }),
    })
});
export const { useGetAllAcademicSemestersQuery, useAddAcademicSemestetMutation, useGetAllDepartmentQuery  } = academicManagementApi;