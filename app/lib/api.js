import apiClient from "./apiClient";

// get latest blog post
export async function getLatestBlogPost() {
  try {
    const res = await apiClient.get('/blog/latest');
    console.log("\\n\\n\nres blog:", res.data)
    // if (res.status === 200) {
    //   return res.data;
    // } else {
    //   return null;
    // }
  } catch (err) {
    console.error("Error fetching latest blog post:", err);
    return null;
  }
};

// get all blog post
export async function getAllBlog( page, limit ) {
  try {
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

// get single blog post
export async function getSingleBlogPost(id) {
  try {
    const res = await apiClient.get(`/blog/${id}`);
    if (res.status === 200) {
      return res.data.data;
    } else {
      return null;
    }
  } catch (err) {
    console.error("Error fetching latest blog:", err);
    return null;
  }
};


// get latest publication post
export async function getLatestPublication() {
    try {
      const res = await apiClient.get('/publication/latest');
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

  

// get single publication
export async function getSinglePublicationPost(id) {
  try {
    const res = await apiClient.get(`/publication/${id}`);
    if (res.status === 200) {
      return res.data.data;
    } else {
      return null;
    }
  } catch (err) {
    console.error("Error fetching latest publication:", err);
    return null;
  }
};



// get latest multimedia post
export async function getLatestMultimedia() {
  try {
    const res = await apiClient.get('/multimedia/latest');
    if (res.status === 200) {
      return res.data;
    } else {
      return null;
    }
  } catch (err) {
    console.error("Error fetching latest multimedia post:", err);
    return null;
  }
};

// get all multimedia post
export async function getAllMultimedia( page, limit ) {
try {
  const res = await apiClient.get(`/multimedia/?limit=${limit}&page=${page}`);
  if (res.status === 200) {
    return res.data;
  } else {
    return null
  }
} catch (err) {
  console.error("Error fetching latest multimedia post:", err);
  return null;
}
}



// get single multimedia
export async function getSingleMultimediaPost(id) {
try {
  const res = await apiClient.get(`/multimedia/${id}`);
  if (res.status === 200) {
    return res.data.data;
  } else {
    return null;
  }
} catch (err) {
  console.error("Error fetching latest multimedia post:", err);
  return null;
}
};


// get latest training post
export async function getLatestTraining() {
  try {
    const res = await apiClient.get('/training/latest');
    if (res.status === 200) {
      return res.data;
    } else {
      return null;
    }
  } catch (err) {
    console.error("Error fetching latest training post:", err);
    return null;
  }
};

// get all training post
export async function getAllTraining( page, limit ) {
try {
  const res = await apiClient.get(`/training/?limit=${limit}&page=${page}`);
  if (res.status === 200) {
    return res.data;
  } else {
    return null
  }
} catch (err) {
  console.error("Error fetching latest training post:", err);
  return null;
}
}



// get single training
export async function getSingleTrainingPost(id) {
try {
  const res = await apiClient.get(`/training/${id}`);
  if (res.status === 200) {
    return res.data.data;
  } else {
    return null;
  }
} catch (err) {
  console.error("Error fetching latest training post:", err);
  return null;
}
};

  