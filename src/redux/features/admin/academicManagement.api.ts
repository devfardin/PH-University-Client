import { TResponseRedux } from "../../../types";
import { TAcademicSemester } from "../../../types/academicManagement";
import { baseApi } from "../../api/baseApi";

const academicManagementApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllAcademicSemesters: builder.query({
            query: (args) =>{
                const params = new URLSearchParams();
                console.log(args);
                
                if(args) {
                   args.forEach((item: string) => {
                    params.append(item?.name, item?.value)
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
        AddAcademicSemestet: builder.mutation({
            query: (data) => ({
                url: 'academic-semesters/create-academic-semester',
                method: 'POST',
                body: data,
            }),
        }),
    })
});
export const { useGetAllAcademicSemestersQuery, useAddAcademicSemestetMutation  } = academicManagementApi;