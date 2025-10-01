export const ALL_DONUTS = 'ALL_DONUTS'

export const listDonuts = (donuts) => {
    return{
        type: ALL_DONUTS,
        payload: donuts
    }
}
