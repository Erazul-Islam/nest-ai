export const sendResponse = <T>(data: T, message: string) => {
  return {
    success: true,
    message,
    data,
  };
};
