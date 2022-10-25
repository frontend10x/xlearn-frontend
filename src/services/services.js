import axios from "axios";
import { baseURL } from "../utils/route";

export const loginPost = async (email, password) => {
  const response = await axios.post(baseURL + "/api/v1/login", {
    email,
    password,
  });

  return response.data;
};

export const registerPost = async (
  name,
  lastname,
  company,
  email,
  website,
  size,
  country,
  content,
  plan_id,
  quotas,
  password,
  password_confirmation,
  observation
) => {
  const response = await axios.post(
    baseURL + "/api/v1/register_requests/store",
    {
      name,
      lastname,
      company,
      email,
      website,
      size,
      country,
      content,
      plan_id,
      quotas,
      observation,
      password,
      password_confirmation,
    }
  );

  return response.data;
};

export const getCountrys = async () => {
  const response = await axios.get(baseURL + "/api/v1/countries/list");
  return response.data.countries;
};

export const getPlans = async () => {
  const response = await axios.get(baseURL + "/api/v1/plan/list");
  return response.data.plans;
};

export const getContent = async () => {
  const response = await axios.get(baseURL + "/api/v1/content/list");
  return response.data.contents;
};

export const getSize = async () => {
  const response = await axios.get(baseURL + "/api/v1/size/list");
  return response.data.sizes;
};

export const quizDiagnostic = async (token) => {
  const response = await axios.get(baseURL + "/api/v1/questions/list", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const getCourse = async (token) => {
  const response = await axios.get(baseURL + "/api/v1/course/list", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const registerDiagnostic = async (
  target,
  user_id,
  _rel,
  answers,
  group_id,
  token
) => {
  const body = {
    target,
    user_id,
    _rel,
    answers,
    group_id,
    token
  };

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(
    baseURL + "/api/v1/diagnostic/store",
    body,
    config
  );

  return response.data;
};

export const getAreas = async (token) => {
  const response = await axios.get(baseURL + "/api/v1/area/list", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const getCoursesById = async (token, filter_id) => {
  const response = await axios.get(
    baseURL + `/api/v1/course/show_area/${filter_id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};

export const confirmRoute = async (token, diagnostic_id) => {

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    }
  }

  const body = {}

  const response = await axios.patch(baseURL + `/api/v1/diagnostic/confirm_route/${diagnostic_id}`,body, config);

  return response.data;
};

export const createGroup = async (token, name, description) => {
  const body = {
    name,
    description,
  };

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(
    baseURL + "/api/v1/group/store",
    body,
    config
  );
  return response.data;
};

export const makePayment = async (token, name, email, amount_user, amount_time, coupon, subcompanie_id) => {

  const body = {
    token, name, email, amount_user, amount_time, coupon, subcompanie_id
  };

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    }
  };

  const response = await axios.post(baseURL + '/api/v1/payment/requests', body, config)
  return response.data;
}

export const typeOfUsers = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    }
  };

  const response = await axios.get(baseURL + '/api/v1/types_users/list', config)
  return response.data;

}

export const creationUser = async (token, name, email, phone, type_id, rol_id, password, password_confirmation, subcompanies_id) => {

  const body = { name, email, phone, type_id, rol_id, password, password_confirmation,subcompanies_id }

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    }
  };
  const response = await axios.post(baseURL + '/api/v1/user/store', body, config);
  return response.data;
}

export const getRegisteredUsers = async (token) => {

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    }
  };

  const response = await axios.get(baseURL + '/api/v1/user/list', config)
  return response.data;
}

export const getUserCourseById = async (token, id) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    }
  };

  const response = await axios.get(baseURL + `/api/v1/course/show_user/${id}?offset=1`, config)
  return response.data;
}

export const getLessons = async (token, id) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    }
  };

  const response = await axios.get(baseURL + `/api/v1/lesson/show_course/${id}?offset1`,config)
  return response.data

}

export const getUserWithoutGroups = async (token, subcompanie_id) => {
  
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    }
  };

  const response = await axios.get(baseURL + `/api/v1/user/sub_companies_withou_group?offset=1&limit=-1&subcompanies_id=${subcompanie_id}`, config)

  return response.data
}

export const addUserToGroup = async (token, group_id, user, leader) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    }
  };

  const body = {user}
  body['leader'] = leader

  const response = await axios.post(baseURL + `/api/v1/groupuser/assignment/${group_id}`,body,config)
  return response
}