import Form from "react-bootstrap/Form";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { SetPersonalDetails } from "src/redux/ResumeSlice";
const PersonalDetailsForm = () => {
  const dispatch = useDispatch();
  const { register, watch } = useForm();
  const watchedFields = watch("fullname");
  const fullname = useSelector((state) => state.resume.initialresume.fullname);
  // const { fullname } = data;
  useEffect(() => {
    dispatch(SetPersonalDetails({ fullname: watchedFields }));
  }, [dispatch, watchedFields]);

  return (
    <>
      <Form.Control
        type="text"
        placeholder="Enter your fullname"
        value={fullname}
        {...register("fullname")}
      />
      {/* <Form.Control
        type="text"
        placeholder="Enter headlin"
        // value={headline}
        {...register("headline")}
      /> */}
      {/* <Form.Control
        type="email"
        placeholder="Enter your email address"
        // value={email}
        className="my-3"
        {...register("email")}
      />
      <Form.Control
        type="digit"
        placeholder="Enter your phone number"
        // value={phonenumber}
        className="my-3"
        {...register("phonenumber")}
      />
      <Form.Control
        type="text"
        // value={address}
        placeholder="Enter your address"
        className="my-3"
        {...register("address")}
      /> */}
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
