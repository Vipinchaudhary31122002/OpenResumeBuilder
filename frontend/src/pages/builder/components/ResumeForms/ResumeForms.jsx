// import { useEffect, useCallback } from "react";
import { useForm } from "react-hook-form";
// import { debounce } from "lodash";

// Redux imports
import { useSelector, useDispatch } from "react-redux";
import {
  SetProjectDetails,
  SetWorkExperienceDetails,
  SetEducationDetails,
  SetLinksDetails,
  SetSkills,
  SetSpokenLanguages,
  SetHobbies,
} from "src/redux/ResumeSlice";

// React Bootstrap imports
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";

// Display components imports
import {
  DisplayLink,
  DisplaySkill,
  DisplaySpokenLanguage,
  DisplayHobby,
  DisplayProject,
  DisplayEducation,
  DisplayWorkExperience,
} from "./Components/DisplayInfo";

const PersonalDetailForm = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const SubmitSkills = (data) => dispatch(SetSkills(data.skills));
  const SubmitLanguages = (data) =>
    dispatch(SetSpokenLanguages(data.spokenlanguages));
  const SubmitHobbies = (data) => dispatch(SetHobbies(data.hobbies));
  const {
    // fullname,
    // headline,
    // email,
    // phonenumber,
    // address,
    // website,
    // summary,
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
      <Form.Group className="mb-1">
        <Form.Label className="mb-0">Fullname</Form.Label>
        <Form.Control
          type="text"
          placeholder="Jhon Doe"
          // value={fullname}
          {...register("fullname")}
          size="sm"
        />
      </Form.Group>
      <Form.Group className="mb-1">
        <Form.Label className="mb-0">Headline</Form.Label>
        <Form.Control
          type="text"
          placeholder="Software Developer"
          // value={headline}
          {...register("headline")}
          size="sm"
        />
      </Form.Group>
      <Form.Group className="mb-1">
        <Form.Label className="mb-0">Email Address</Form.Label>
        <Form.Control
          type="email"
          placeholder="JhonDoe@gmail.com"
          // value={email}
          {...register("email")}
          size="sm"
        />
      </Form.Group>
      <Form.Group className="mb-1">
        <Form.Label className="mb-0">Phone Number</Form.Label>
        <Form.Control
          type="tel"
          placeholder="+91 1234567890"
          // value={phonenumber}
          size="sm"
          {...register("phonenumber")}
        />
      </Form.Group>
      <Form.Group className="mb-1">
        <Form.Label className="mb-0">Address</Form.Label>
        <Form.Control
          type="text"
          // value={address}
          placeholder="City State Country"
          size="sm"
          {...register("address")}
        />
      </Form.Group>
      <Form.Group className="mb-1">
        <Form.Label className="mb-0">Website URL</Form.Label>
        <Form.Control
          type="text"
          // value={website}
          placeholder="jhondoe.com"
          size="sm"
          {...register("website")}
        />
      </Form.Group>
      <Form.Group className="mb-1">
        <Form.Label className="mb-0">Summary</Form.Label>
        <Form.Control
          as="textarea"
          placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          size="sm"
          // value={summary}
          style={{ height: "200px" }}
          {...register("summary")}
        />
      </Form.Group>
      <form onSubmit={handleSubmit(SubmitSkills)}>
        <Form.Group className="mb-1">
          <Form.Label className="mb-0">Skills</Form.Label>
          <Stack direction="horizontal">
            <Form.Control
              type="text"
              placeholder="skill"
              {...register("skills")}
              size="sm"
            />
            <Button size="sm" className="mx-1" type="submit">
              Add
            </Button>
          </Stack>
          {skills.map((skill, index) => (
            <DisplaySkill key={index} skill={skill} />
          ))}
        </Form.Group>
      </form>
      <form onSubmit={handleSubmit(SubmitLanguages)}>
        <Form.Group className="mb-1">
          <Form.Label className="mb-0">Spoken languages</Form.Label>
          <Stack direction="horizontal">
            <Form.Control
              type="text"
              placeholder="language"
              {...register("spokenlanguages")}
              size="sm"
            />
            <Button size="sm" className="mx-1" type="submit">
              Add
            </Button>
          </Stack>
          {spokenlanguages.map((spokenlanguage, index) => (
            <DisplaySpokenLanguage
              key={index}
              spokenlanguage={spokenlanguage}
            />
          ))}
        </Form.Group>
      </form>
      <form onSubmit={handleSubmit(SubmitHobbies)}>
        <Form.Group className="mb-1">
          <Form.Label className="mb-0">Hobbies</Form.Label>
          <Stack direction="horizontal">
            <Form.Control
              type="text"
              placeholder="hobby"
              {...register("hobbies")}
              size="sm"
            />
            <Button size="sm" className="mx-1" type="submit">
              Add
            </Button>
          </Stack>
          {hobbies.map((hobby, index) => (
            <DisplayHobby key={index} hobby={hobby} />
          ))}
        </Form.Group>
      </form>
    </>
  );
};

const WorkExperienceForm = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => dispatch(SetWorkExperienceDetails(data));
  const WorkExperiences = useSelector(
    (state) => state.resume.initialresume.workexperiences
  );
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-1">
          <Form.Label className="mb-0">Company name</Form.Label>
          <Form.Control
            type="text"
            placeholder="XYZ"
            size="sm"
            {...register("company")}
          />
        </Form.Group>
        <Form.Group className="mb-1">
          <Form.Label className="mb-0">Position</Form.Label>
          <Form.Control
            type="text"
            placeholder="XYZ Position"
            size="sm"
            {...register("position")}
          />
        </Form.Group>
        <Form.Group className="mb-1">
          <Form.Label className="mb-0">Duration</Form.Label>
          <Form.Control
            type="text"
            placeholder="January 2024 - March 2024"
            size="sm"
            {...register("duration")}
          />
        </Form.Group>
        <Form.Group className="mb-1">
          <Form.Label className="mb-0">Summary</Form.Label>
          <Form.Control
            as="textarea"
            placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non luctus mi."
            style={{ height: "200px" }}
            {...register("summary")}
          />
        </Form.Group>
        <Button className="my-1" type="submit">
          Add
        </Button>
      </form>
      {WorkExperiences.map((workexperience, index) => (
        <DisplayWorkExperience workexperience={workexperience} key={index} />
      ))}
    </>
  );
};

const ProjectForm = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => dispatch(SetProjectDetails(data));
  const Projects = useSelector((state) => state.resume.initialresume.projects);
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-1">
          <Form.Label className="mb-0">Project name</Form.Label>
          <Form.Control
            type="text"
            placeholder="XYZ"
            size="sm"
            {...register("name")}
          />
        </Form.Group>
        <Form.Group className="mb-1">
          <Form.Label className="mb-0">Duration</Form.Label>
          <Form.Control
            type="text"
            placeholder="January 2024 - March 2024"
            size="sm"
            {...register("duration")}
          />
        </Form.Group>
        <Form.Group className="mb-1">
          <Form.Label className="mb-0">Project URL</Form.Label>
          <Form.Control
            type="text"
            placeholder="xyz.com"
            size="sm"
            {...register("url")}
          />
        </Form.Group>
        <Form.Group className="mb-1">
          <Form.Label className="mb-0">Project Summary</Form.Label>
          <Form.Control
            as="textarea"
            placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            {...register("summary")}
            style={{ height: "200px" }}
          />
        </Form.Group>
        <Button className="my-1" type="submit">
          Add
        </Button>
      </form>
      {Projects.map((project, index) => (
        <DisplayProject project={project} key={index} />
      ))}
    </>
  );
};

const LinkForm = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => dispatch(SetLinksDetails(data));
  const Links = useSelector((state) => state.resume.initialresume.links);
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-1">
          <Form.Label className="mb-0">Network name</Form.Label>
          <Form.Control
            type="text"
            placeholder="LinkedIn"
            size="sm"
            {...register("networkname")}
          />
        </Form.Group>
        <Form.Group className="mb-1">
          <Form.Label className="mb-0">Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="jhonedoe"
            size="sm"
            {...register("username")}
          />
        </Form.Group>
        <Form.Group className="mb-1">
          <Form.Label className="mb-0">Profile URL</Form.Label>
          <Form.Control
            type="text"
            placeholder="jhonedoe@linkedin.com"
            size="sm"
            {...register("profileurl")}
          />
        </Form.Group>
        <Button className="my-1" type="submit">
          Add
        </Button>
      </form>
      {Links?.map((link, index) => (
        <DisplayLink link={link} key={index} />
      ))}
    </>
  );
};

const EducationForm = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => dispatch(SetEducationDetails(data));
  const Educations = useSelector(
    (state) => state.resume.initialresume.educations
  );
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-1">
          <Form.Label className="mb-0">University name</Form.Label>
          <Form.Control
            type="text"
            placeholder="XYZ University"
            size="sm"
            {...register("universityname")}
          />
        </Form.Group>
        <Form.Group className="mb-1">
          <Form.Label className="mb-0">Degree name</Form.Label>
          <Form.Control
            type="text"
            placeholder="XYZ Degree"
            size="sm"
            {...register("degreename")}
          />
        </Form.Group>
        <Form.Group className="mb-1">
          <Form.Label className="mb-0">Grade Score</Form.Label>
          <Form.Control
            type="digit"
            placeholder="Out of 10"
            size="sm"
            {...register("grade")}
          />
        </Form.Group>
        <Form.Group className="mb-1">
          <Form.Label className="mb-0">Duration</Form.Label>
          <Form.Control
            type="text"
            placeholder="January 2024 - March 2024"
            size="sm"
            {...register("duration")}
          />
        </Form.Group>
        <Form.Group className="mb-1">
          <Form.Label className="mb-0">Summary</Form.Label>
          <Form.Control
            as="textarea"
            placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            {...register("summary")}
            style={{ height: "200px" }}
          />
        </Form.Group>
        <Button className="my-1" type="submit">
          Add
        </Button>
      </form>
      {Educations.map((education, index) => (
        <DisplayEducation education={education} key={index} />
      ))}
    </>
  );
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
