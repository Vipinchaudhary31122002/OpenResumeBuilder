import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
// Redux imports
import { useSelector, useDispatch } from "react-redux";
import {
  UpdatePersonalDetails,
  SetProjectDetails,
  SetWorkExperienceDetails,
  SetEducationDetails,
  SetLinkDetails,
  SetSkillDetails,
  SetSpokenLanguageDetails,
  SetHobbyDetails,
} from "src/redux/ResumeSlice";

// React Bootstrap imports
import Form from "react-bootstrap/Form";
import Stack from "react-bootstrap/Stack";

// function that display notification indicator on error
const DisplayError = (text) => toast.error(text);
const DisplaySuccess = (text) => toast.success(text);

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
import { DisplayFormButton } from "src/utils/DisplayButton";

const PersonalDetailForm = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit, resetField } = useForm();
  const UpdatePersonal = (data) => {
    if (data.fullname == 0) DisplayError("Fullname is required");
    else {
      dispatch(UpdatePersonalDetails(data));
      DisplaySuccess("Personal Details Saved");
    }
  };
  const SubmitSkills = (data) => {
    if (data.skills.length == 0) {
      DisplayError("Skill is required");
    } else {
      dispatch(SetSkillDetails(data.skills));
      resetField("skills");
    }
  };
  const SubmitLanguages = (data) => {
    if (data.spokenlanguages.length == 0) {
      DisplayError("Language is required");
    } else {
      dispatch(SetSpokenLanguageDetails(data.spokenlanguages));
      resetField("spokenlanguages");
    }
  };
  const SubmitHobbies = (data) => {
    if (data.hobbies.length == 0) {
      DisplayError("Hobby is required");
    } else {
      dispatch(SetHobbyDetails(data.hobbies));
      resetField("hobbies");
    }
  };
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

  return (
    <>
      <form onSubmit={handleSubmit(UpdatePersonal)}>
        <Form.Group className="mb-1">
          <Form.Label className="mb-0">Fullname</Form.Label>
          <Form.Control
            type="text"
            placeholder="Jhon Doe"
            defaultValue={fullname}
            {...register("fullname")}
            size="sm"
          />
        </Form.Group>
        <Form.Group className="mb-1">
          <Form.Label className="mb-0">Headline</Form.Label>
          <Form.Control
            type="text"
            placeholder="Software Developer"
            defaultValue={headline}
            {...register("headline")}
            size="sm"
          />
        </Form.Group>
        <Form.Group className="mb-1">
          <Form.Label className="mb-0">Email Address</Form.Label>
          <Form.Control
            type="email"
            placeholder="JhonDoe@gmail.com"
            defaultValue={email}
            {...register("email")}
            size="sm"
          />
        </Form.Group>
        <Form.Group className="mb-1">
          <Form.Label className="mb-0">Phone Number</Form.Label>
          <Form.Control
            type="tel"
            placeholder="+91 1234567890"
            defaultValue={phonenumber}
            size="sm"
            {...register("phonenumber")}
          />
        </Form.Group>
        <Form.Group className="mb-1">
          <Form.Label className="mb-0">Address</Form.Label>
          <Form.Control
            type="text"
            defaultValue={address}
            placeholder="City State Country"
            size="sm"
            {...register("address")}
          />
        </Form.Group>
        <Form.Group className="mb-1">
          <Form.Label className="mb-0">Website URL</Form.Label>
          <Form.Control
            type="text"
            defaultValue={website}
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
            defaultValue={summary}
            style={{ height: "200px" }}
            {...register("summary")}
          />
        </Form.Group>
        <DisplayFormButton
          variant="outline-primary"
          title="Save Changes"
          className="my-1"
          type="submit"
        />
      </form>
      <hr />
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
            <DisplayFormButton
              variant="outline-primary"
              title="Add"
              className="mx-1"
              type="submit"
            />
          </Stack>
          {skills.map((skill, index) => (
            <DisplaySkill key={index} skill={skill} />
          ))}
        </Form.Group>
      </form>
      <hr />
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
            <DisplayFormButton
              variant="outline-primary"
              title="Add"
              type="submit"
              className="mx-1"
            />
          </Stack>
          {spokenlanguages.map((spokenlanguage, index) => (
            <DisplaySpokenLanguage
              key={index}
              spokenlanguage={spokenlanguage}
            />
          ))}
        </Form.Group>
      </form>
      <hr />
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
            <DisplayFormButton
              variant="outline-primary"
              title="Add"
              type="submit"
              className="mx-1"
            />
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
  const { register, handleSubmit, reset } = useForm();
  const Add = (data) => {
    if (data.company.length == 0) {
      DisplayError("Company name is required");
    } else {
      dispatch(SetWorkExperienceDetails(data));
      reset();
    }
  };
  const WorkExperiences = useSelector(
    (state) => state.resume.initialresume.workexperiences
  );
  return (
    <>
      <form onSubmit={handleSubmit(Add)}>
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
        <hr />
        <div className="d-flex justify-content-between ">
          <DisplayFormButton
            variant="outline-primary"
            title="Add"
            type="submit"
          />
          <DisplayFormButton
            variant="outline-primary"
            title="Save Changes"
            type="submit"
          />
        </div>
      </form>
      {WorkExperiences.map((workexperience, index) => (
        <DisplayWorkExperience workexperience={workexperience} key={index} />
      ))}
    </>
  );
};

const ProjectForm = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    if (data.name.length == 0) {
      DisplayError("Project name is required");
    } else {
      dispatch(SetProjectDetails(data));
      reset();
    }
  };
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
        <hr />
        <div className="d-flex justify-content-between">
          <DisplayFormButton
            variant="outline-primary"
            title="Add"
            type="submit"
          />
          <DisplayFormButton
            variant="outline-primary"
            title="Save Changes"
            type="submit"
          />
        </div>
      </form>
      {Projects.map((project, index) => (
        <DisplayProject project={project} key={index} />
      ))}
    </>
  );
};

const LinkForm = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    if (data.networkname.length == 0) {
      DisplayError("Network name is required");
    } else {
      dispatch(SetLinkDetails(data));
      reset();
    }
  };
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
        <hr />
        <div className="d-flex justify-content-between">
          <DisplayFormButton
            variant="outline-primary"
            title="Add"
            type="submit"
          />
          <DisplayFormButton
            variant="outline-primary"
            title="Save Changes"
            type="submit"
          />
        </div>
      </form>

      {Links?.map((link, index) => (
        <DisplayLink link={link} key={index} />
      ))}
    </>
  );
};

const EducationForm = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    if (data.universityname.length == 0) {
      DisplayError("University name is required");
    } else {
      dispatch(SetEducationDetails(data));
      reset();
    }
  };
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
        <hr />
        <div className="d-flex justify-content-between">
          <DisplayFormButton
            variant="outline-primary"
            title="Add"
            type="submit"
          />
          <DisplayFormButton
            variant="outline-primary"
            title="Save Changes"
            type="submit"
          />
        </div>
      </form>

      {Educations.map((education, index) => (
        <DisplayEducation education={education} key={index} />
      ))}
    </>
  );
};

export {
  PersonalDetailForm,
  ProjectForm,
  LinkForm,
  WorkExperienceForm,
  EducationForm,
};

