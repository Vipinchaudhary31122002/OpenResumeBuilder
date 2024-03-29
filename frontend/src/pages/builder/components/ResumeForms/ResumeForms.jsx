import Form from "react-bootstrap/Form";
import { useEffect, useCallback } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { SetPersonalDetails } from "src/redux/ResumeSlice";
import { debounce } from "lodash";
const PersonalDetailsForm = () => {
  const dispatch = useDispatch();
  const { register, watch } = useForm();
  const { fullname, headline, email, phonenumber, address } = useSelector(
    (state) => state.resume.initialresume
  );
  const [
    watchfullname,
    watchheadline,
    watchemail,
    watchphonenumber,
    watchaddress,
  ] = watch(["fullname", "headline", "email", "phonenumber", "address"]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedAction = useCallback(
    debounce((data) => {
      dispatch(SetPersonalDetails(data));
    }, 100),
    [dispatch]
  );
  useEffect(() => {
    debouncedAction({
      fullname: watchfullname,
      headline: watchheadline,
      email: watchemail,
      phonenumber: watchphonenumber,
      address: watchaddress,
    });

    // Cleanup function for debounced action
    return () => {
      debouncedAction.cancel();
    };
  }, [
    debouncedAction,
    watchfullname,
    watchheadline,
    watchemail,
    watchphonenumber,
    watchaddress,
  ]);

  return (
    <>
      <Form.Control
        type="text"
        placeholder="Enter your fullname"
        defaultValue={fullname}
        {...register("fullname")}
      />
      <Form.Control
        type="text"
        placeholder="Enter headline"
        defaultValue={headline}
        className="my-3"
        {...register("headline")}
      />
      <Form.Control
        type="email"
        placeholder="Enter your email address"
        defaultValue={email}
        className="my-3"
        {...register("email")}
      />
      <Form.Control
        type="number"
        placeholder="Enter your phone number"
        defaultValue={phonenumber}
        className="my-3"
        {...register("phonenumber")}
      />
      <Form.Control
        type="text"
        defaultValue={address}
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
