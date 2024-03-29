type TPaginate = {
  page?: number;
  limit?: number;
  sortBy?: string;
  sortOrder?: string;
};

const calculatePaginate = (options: TPaginate) => {
  const page = Number(options.page) || 1;
  const limit = Number(options.limit) || 10;
  const skip = (page - 1) * limit;
  const sortBy = options.sortBy;
  const sortOrder = options.sortOrder;

  return {
    page,
    limit,
    skip,
    sortBy,
    sortOrder,
  };
};

export default calculatePaginate;
