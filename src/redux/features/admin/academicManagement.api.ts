import { baseApi } from "../../api/baseApi";

const academicManagementApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllAcademicSemesters: builder.query({
            query: () => ({
                url: '/academic-semesters',
                method: 'GET',
            }),
            transformResponse: (response) => {
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