import { instance } from ".";

const getAllItrip = async () => {
  const res = await instance.get("/trip/");

  return res.data;
};
const createTrip = async (tripInfo) => {
  const res = await instance.post(`/trip/${_id}`, tripInfo);
  return res.data;
};

const getTripById = async (_id) => {
  const res = await instance.get(`/trip/${_id}`);
  return res.data;
};
export { getAllItrip, getTripById, createTrip };
