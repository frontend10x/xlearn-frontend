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
  email_confirmation,
  phone,
  website,
  size,
  country,
  content,
  plan_id,
  quotas,
  password,
  password_confirmation,
  observation,
  nit
) => {
  const response = await axios.post(
    baseURL + "/api/v1/register_requests/store",
    {
      name,
      lastname,
      company,
      email,
      email_confirmation,
      phone,
      website,
      size,
      country,
      content,
      plan_id,
      quotas,
      observation,
      password,
      password_confirmation,
      nit
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
  const response = await axios.get(baseURL + "/api/v1/course/list?offset=1&limit=12", {
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

  const response = await axios.patch(baseURL + `/api/v1/diagnostic/confirm_route/${diagnostic_id}`, body, config);

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

export const creationUser = async (token, name, email,email_confirmation, phone, type_id, rol_id, area, password, password_confirmation, subcompanies_id) => {

  const body = { name, email,email_confirmation, phone, type_id, rol_id, area,password, password_confirmation, subcompanies_id }

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

  const response = await axios.get(baseURL + `/api/v1/lesson/show_course/${id}?offset=1&limit=15`, config)
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

  const body = { user }
  body['leader'] = leader

  const response = await axios.post(baseURL + `/api/v1/groupuser/assignment/${group_id}`, body, config)
  return response
}

export const getEnterpriseQuotas = async (token, subcompanie_id) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    }
  };

  const body = ""

  const response = await axios.post(baseURL + `/api/v1/payment/approved_payment_status?subcompanie_id=${subcompanie_id}`, body, config)
  return response.data

}

export const getEnterpriseGroups = async (token, subcompanie_id) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    }
  };

  const response = await axios.get(baseURL + `/api/v1/group/list_company_group/${subcompanie_id}?offset=1`, config)
  return response.data;

}

export const evaluationCourse = async (token, course_id) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    }
  };

  const response = await axios.get(baseURL + `/api/v1/evaluation/course?course_id=${course_id}`, config)
  return response.data;
}

export const getUsersGroup = async (token, group_id) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    }
  };

  const response = await axios.get(baseURL + `/api/v1/groupuser/list_group_users/${group_id}`, config)
  return response.data;
}

export const registerAnswers = async (token, schema) => {

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    }
  };

  const response = await axios.post(baseURL + "/api/v1/answer/store", schema, config);
  return response.data;
}

export const getCourseDescription = async (id) => {
  const response = await axios.get(baseURL + `/api/v1/course/show/${id}`)

  return response.data
}

export const generateCertificate = async (token, user_id, course_id) => {

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    }
  };

  const body = {};

  const response = await axios.post(baseURL + `/api/v1/certificate/generate?user_id=${user_id}&course_id=${course_id}`, body,config)
  return response.data
}

export const contactSupport = async (name, phone, company, email, observation) => {

  const body = {
    name, phone, company, email, observation
  }

  const response = await axios.post(baseURL + `/api/v1/contact_us/store`, body)
  return response.data

}

export const getUserByEnterprise = async (token,subcompanie_id) => {

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    }
  };
  const body = ""
  const response = await axios.get(baseURL + `/api/v1/sub_companies/users/${subcompanie_id}?offset=1`,config)
  return response.data

}

export const handlePassword = async (email) => {
  const response = await axios.post(baseURL + `/api/v1/user/forgot_password?email=${email}`);
  return response.data
}

export const recoveryPassword = async (id,password,password2) => {
  const response = await axios.put(baseURL + `/api/v1/user/recover_password/${id}?password=${password}&password_confirmation=${password2}`)
  return response.data;
}

export const desactivateUser = async (token,id) => {

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    }
  };

  const response = axios.delete(baseURL + `/api/v1/user/delete/${id}`, config);
  return response.data;
}

export const validateRut = async (token,subcompanieid,doc) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data"
    }
  };
  const body = new FormData();
  body.append('file', doc)
  body.append('sub_companieId',subcompanieid)

  const response = axios.post(baseURL + `/api/v1/subempresa/rut`,body,config)
  return response.data
}

export const reportEnterprise = (token, id) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    }
  };

  const response = axios.get(baseURL + `/api/v1/reports/states/${id}`,config);
  return response;  

}

export const validateMembership = (token, subcompanie_id) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    }
  };

  const response = axios.get(baseURL + `/api/v1/subempresa/validateSubscription/${subcompanie_id}`,config);
  return response;
}