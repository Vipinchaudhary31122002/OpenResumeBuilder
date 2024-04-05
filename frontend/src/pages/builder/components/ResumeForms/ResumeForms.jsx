import Form from "react-bootstrap/Form";
// import { useEffect, useCallback } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
// import { SetPersonalDetails, SetSkills } from "src/redux/ResumeSlice";
// import { debounce } from "lodash";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";
import DisplayField from "./Components/DisplayField";
const PersonalDetailForm = () => {
  // const dispatch = useDispatch();
  const { register } = useForm();
  const {
    fullname,
    headline,
    email,
    phonenumber,
    address,
    website,
    summary,
    skills,
    spokenlanguages,
    hobbies,
  } = useSelector((state) => state.resume.initialresume.personal);
  // const [
  //   watchfullname,
  //   watchheadline,
  //   watchemail,
  //   watchphonenumber,
  //   watchaddress,
  // ] = watch(["fullname", "headline", "email", "phonenumber", "address"]);
  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // const debouncedAction = useCallback(
  //   debounce((data) => {
  //     dispatch(SetPersonalDetails(data));
  //   }, 100),
  //   [dispatch]
  // );
  // useEffect(() => {
  //   debouncedAction({
  //     fullname: watchfullname,
  //     headline: watchheadline,
  //     email: watchemail,
  //     phonenumber: watchphonenumber,
  //     address: watchaddress,
  //   });

  //   // Cleanup function for debounced action
  //   return () => {
  //     debouncedAction.cancel();
  //   };
  // }, [
  //   debouncedAction,
  //   watchfullname,
  //   watchheadline,
  //   watchemail,
  //   watchphonenumber,
  //   watchaddress,
  // ]);

  return (
    <>
      <Form.Control
        type="text"
        placeholder="Enter your fullname"
        value={fullname}
        {...register("fullname")}
        size="sm"
      />
      <Form.Control
        type="text"
        placeholder="Enter headline"
        value={headline}
        className="my-2"
        {...register("headline")}
        size="sm"
      />
      <Form.Control
        type="email"
        placeholder="Enter your email address"
        value={email}
        className="my-2"
        {...register("email")}
        size="sm"
      />
      <Form.Control
        type="digit"
        placeholder="Enter your phone number"
        value={phonenumber}
        className="my-2"
        size="sm"
        {...register("phonenumber")}
      />
      <Form.Control
        type="text"
        value={address}
        placeholder="Enter your address"
        className="my-2"
        size="sm"
        {...register("address")}
      />
      <Form.Control
        type="text"
        value={website}
        placeholder="Enter your website"
        className="my-2"
        size="sm"
        {...register("website")}
      />
      <Form.Control
        as="textarea"
        placeholder="Enter a summary about yourself"
        size="sm"
        value={summary}
        style={{ height: "200px" }}
        {...register("summary")}
      />
      <Stack direction="horizontal">
        <Form.Control
          type="text"
          placeholder="Enter you skills"
          className="my-2"
          {...register("skills")}
          size="sm"
        />
        <Button size="sm" className="mx-1">
          Add
        </Button>
      </Stack>
      {skills.map((skill, index) => (
        <Badge key={index} className="mx-1">
          {skill}
        </Badge>
      ))}
      <Stack direction="horizontal">
        <Form.Control
          type="text"
          placeholder="Enter your Spoken languages"
          className="my-2"
          {...register("spokenlanguages")}
          size="sm"
        />
        <Button size="sm" className="mx-1">
          Add
        </Button>
      </Stack>
      {spokenlanguages.map((spokenlanguage, index) => (
        <Badge key={index} className="mx-1">
          {spokenlanguage}
        </Badge>
      ))}
      <Stack direction="horizontal">
        <Form.Control
          type="text"
          placeholder="Enter you hobbies"
          className="my-2"
          {...register("hobbies")}
          size="sm"
        />
        <Button size="sm" className="mx-1">
          Add
        </Button>
      </Stack>
      {hobbies.map((hobby, index) => (
        <Badge key={index} className="mx-1">
          {hobby}
        </Badge>
      ))}
    </>
  );
};

const WorkExperienceForm = () => {
  return <div> WorkExperienceForm</div>;
};

const ProjectForm = () => {
  return (
    <>
      <h1>This is ProjectsFrom</h1>
    </>
  );
};

const LinkForm = () => {
  const Links = useSelector((state) => state.resume.initialresume.links);
  return (
    <>
      <Form.Control
        type="text"
        placeholder="Enter your network name"
        // value={fullname}
        // {...register("fullname")}
        className="my-2"
      />
      <Form.Control
        type="text"
        placeholder="Enter your username"
        // value={fullname}
        // {...register("fullname")}
        className="my-2"
      />
      <Form.Control
        type="text"
        placeholder="Enter your profile url"
        // value={fullname}
        // {...register("fullname")}
        className="my-2"
      />
      <Button className="my-1">Add</Button>
      {Links.map((link, index) => (
        <DisplayField link={link} key={index} />
      ))}
    </>
  );
};

const EducationForm = () => {
  return <div>EducationForm</div>;
};

// const CertificateForm = () => {
//   return <div>CertificatesForm</div>;
// };

// Added awards, publications, volunteering and references

export {
  PersonalDetailForm,
  // CertificateForm,
  ProjectForm,
  LinkForm,
  WorkExperienceForm,
  EducationForm,
};
