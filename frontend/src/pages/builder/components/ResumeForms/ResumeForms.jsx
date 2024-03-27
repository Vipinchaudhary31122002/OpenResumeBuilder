import Form from "react-bootstrap/Form";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import {
  SetFullname,
  SetAddress,
  SetEmail,
  SetPhonenumber,
} from "src/redux/ResumeSlice";
const PersonalDetailsForm = () => {
  const dispatch = useDispatch();
  const { register, watch } = useForm();
  const watchFullname = watch("fullname");
  const watchEmail = watch("email");
  const watchAddress = watch("address");
  const watchPhonenumber = watch("phonenumber")
  useEffect(() => {
    dispatch(SetFullname(watchFullname));
    dispatch(SetAddress(watchAddress));
    dispatch(SetEmail(watchEmail));
    dispatch(SetPhonenumber(watchPhonenumber));
  }, [dispatch, watchFullname, watchAddress, watchEmail, watchPhonenumber]);

  return (
    <>
      <Form.Control
        type="text"
        placeholder="Enter your fullname"
        {...register("fullname")}
      />
      <Form.Control
        type="email"
        placeholder="Enter your email address"
        className="my-3"
        {...register("email")}
      />
      <Form.Control
        type="digit"
        placeholder="Enter your phone number"
        className="my-3"
        {...register("phonenumber")}
      />
      <Form.Control
        type="text"
        placeholder="Enter your address"
        className="my-3"
        {...register("address")}
      />
    </>
  );
};

const WorkExperienceForm = () => {
  return <div> WorkExperienceForm</div>;
};

const SummaryForm = () => {
  return (
    <>
      <Form.Control
        as="textarea"
        placeholder="Enter a summary about yourself"
        style={{ height: "200px" }}
      />
    </>
  );
};

const SpokenLanguagesForm = () => {
  return <div>SpokenLanguagesForm</div>;
};

const SkillsForm = () => {
  return <div>SkillsForm</div>;
};

const ProjectsForm = () => {
  return (
    <>
      <h1>This is ProjectsFrom</h1>
    </>
  );
};

const LinksForm = () => {
  return <div>LinksForm</div>;
};

const EducationForm = () => {
  return <div>EducationForm</div>;
};

const CustomSectionsForm = () => {
  return <div>CustomSectionsForm</div>;
};

const CertificatesForm = () => {
  return <div>CertificatesForm</div>;
};

export {
  PersonalDetailsForm,
  CertificatesForm,
  CustomSectionsForm,
  SkillsForm,
  SpokenLanguagesForm,
  ProjectsForm,
  LinksForm,
  WorkExperienceForm,
  SummaryForm,
  EducationForm,
};
