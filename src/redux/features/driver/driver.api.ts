import { baseApi } from "@/redux/baseApi";

export const driverApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getDriverStats: builder.query({
      query: () => ({
        url: "/driver/stats",
        method: "GET",
      }),
      providesTags: ["DRIVER"],
    }),
    getAvailableRides: builder.query({
      query: () => ({
        url: "/driver/rides-available",
        method: "GET",
      }),
      providesTags: ["RIDE"],
    }),
    acceptRide: builder.mutation({
      query: (rideId: string) => ({
        url: `/driver/rides/${rideId}/accept`,
        method: "PATCH",
      }),
      invalidatesTags: ["RIDE", "DRIVER"],
    }),
    rejectRide: builder.mutation({
      query: (rideId: string) => ({
        url: `/driver/rides/${rideId}/reject`,
        method: "PATCH",
      }),
      invalidatesTags: ["RIDE", "DRIVER"],
    }),
    getDriverEarnings: builder.query({
      query: () => ({
        url: "/driver/earnings",
        method: "GET",
      }),
      providesTags: ["DRIVER"],
    }),
    getDriverRideHistory: builder.query({
      query: () => ({
        url: "/driver/earning-history",
        method: "GET",
      }),
      providesTags: ["DRIVER", "RIDE"],
      keepUnusedDataFor: 0,
    }),
    getActiveRides: builder.query({
      query: () => ({
        url: "/driver/active-rides",
        method: "GET",
      }),
      providesTags: ["RIDE"],
    }),
    updateRideStatus: builder.mutation({
      query: (rideId: string) => ({
        url: `/driver/rides/${rideId}/status`,
        method: "PATCH",
      }),
      invalidatesTags: ["RIDE", "DRIVER"],
    }),
  }),
});

export const { 
  useGetDriverStatsQuery,
  useGetAvailableRidesQuery,
  useAcceptRideMutation,
  useRejectRideMutation,
  useGetDriverEarningsQuery,
  useGetDriverRideHistoryQuery,
  useGetActiveRidesQuery,
  useUpdateRideStatusMutation
} = driverApi;