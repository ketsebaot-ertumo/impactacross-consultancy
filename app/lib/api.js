import apiClient from "./apiClient";

// get latest blog post
export async function getLatestBlog() {
    try {
      const res = await apiClient.get('/blog/search/latest');
      if (res.status === 200) {
        return res.data;
      } else {
        return null;
      }
    } catch (err) {
      console.error("Error fetching latest blog:", err);
      return null;
    }
};

// get all blog post
export async function getAllBlog( page, limit ) {
  try {
    // const res = await apiClient.get('/blog/', {
    //   params: { limit, page }
    // });
    const res = await apiClient.get(`/blog/?limit=${limit}&page=${page}`);
    if (res.status === 200) {
      return res.data;
    } else {
      return null
    }
  } catch (err) {
    console.error("Error fetching latest blog:", err);
    return null;
  }
}

// get latest publication post
export async function getLatestPublication() {
    try {
      const res = await apiClient.get('/publication/search/latest');
      if (res.status === 200) {
        return res.data;
      } else {
        return null;
      }
    } catch (err) {
      console.error("Error fetching latest post:", err);
      return null;
    }
};

// get all publication post
export async function getAllPublication( page, limit ) {
  try {
    // const res = await apiClient.get('/publication/', {
    //   params: { limit, page }
    // });
    const res = await apiClient.get(`/publication/?limit=${limit}&page=${page}`);
    if (res.status === 200) {
      return res.data;
    } else {
      return null
    }
  } catch (err) {
    console.error("Error fetching latest post:", err);
    return null;
  }
}

  
  