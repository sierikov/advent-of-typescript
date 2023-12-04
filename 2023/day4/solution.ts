export type Address = { address: string; city: string };
export type PresentDeliveryList<T> = {
  [P in keyof T]: Address;
};
