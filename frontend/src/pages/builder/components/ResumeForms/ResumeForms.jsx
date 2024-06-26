import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useEffect } from "react";
// Redux imports
import { useSelector, useDispatch } from "react-redux";
import {
  UpdatePersonal,
  CreateProject,
  CreateWorkExperience,
  CreateEducation,
  CreateLink,
  CreateSkill,
  CreateSpokenLanguage,
  CreateHobby,
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
// import { FormModalBox } from "./Components/Forms";
// import { DisplayButton } from "src/utils/DisplayButton";

const PersonalDetailForm = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit, resetField } = useForm();
  const SubmitPersonal = (data) => {
    if (data.fullname == 0) DisplayError("Fullname is required");
    else {
      dispatch(UpdatePersonal(data));
      DisplaySuccess("Personal Details Saved");
    }
  };
  const SubmitSkills = (data) => {
    if (data.skills.length == 0) {
      DisplayError("Skill is required");
    } else {
      dispatch(CreateSkill(data.skills));
      resetField("skills");
    }
  };
  const SubmitLanguages = (data) => {
    if (data.spokenlanguages.length == 0) {
      DisplayError("Language is required");
    } else {
      dispatch(CreateSpokenLanguage(data.spokenlanguages));
      resetField("spokenlanguages");
    }
  };
  const SubmitHobbies = (data) => {
    if (data.hobbies.length == 0) {
      DisplayError("Hobby is required");
    } else {
      dispatch(CreateHobby(data.hobbies));
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
      <form onSubmit={handleSubmit(SubmitPersonal)}>
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
  const WorkExperiences = useSelector(
    (state) => state.resume.initialresume.workexperiences
  );
  const dispatch = useDispatch();
  const { register, handleSubmit, reset, setValue } = useForm({
    defaultValues: {
      company: "",
      position: "",
      duration: "",
      summary: "",
    },
  });
  const Add = (data) => {
    if (data.company.length == 0) {
      DisplayError("Company name is required");
    } else {
      dispatch(CreateWorkExperience(data));
      reset();
    }
  };
  const SelectedWorkExperienceID = useSelector(
    (state) => state.resume.SelectedDispalyInfoID.SelectedWorkExperienceID
  );
  useEffect(() => {
    if (SelectedWorkExperienceID !== 0) {
      const selectedWorkExperience = WorkExperiences.find(
        (link) => link.id === SelectedWorkExperienceID
      );
      if (selectedWorkExperience) {
        setValue("company", selectedWorkExperience.company);
        setValue("position", selectedWorkExperience.position);
        setValue("duration", selectedWorkExperience.duration);
        setValue("summary", selectedWorkExperience.summary);
      }
    }
  }, [SelectedWorkExperienceID, WorkExperiences, setValue]);
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
          {/* <DisplayFormButton
            variant="outline-primary"
            title="Save Changes"
            type="submit"
          /> */}
        </div>
      </form>
      {WorkExperiences.map((workexperience, index) => (
        <DisplayWorkExperience workexperience={workexperience} key={index} />
      ))}
    </>
  );
};

const ProjectForm = () => {
  const Projects = useSelector((state) => state.resume.initialresume.projects);
  const dispatch = useDispatch();
  const { register, handleSubmit, reset, setValue } = useForm({
    defaultValues: {
      name: "",
      url: "",
      duration: "",
      summary: "",
    },
  });
  const onSubmit = (data) => {
    if (data.name.length == 0) {
      DisplayError("Project name is required");
    } else {
      dispatch(CreateProject(data));
      reset();
    }
  };
  const SelectedProjectID = useSelector(
    (state) => state.resume.SelectedDispalyInfoID.SelectedProjectID
  );
  useEffect(() => {
    if (SelectedProjectID !== 0) {
      const selectedProject = Projects.find(
        (link) => link.id === SelectedProjectID
      );
      if (selectedProject) {
        setValue("name", selectedProject.name);
        setValue("duration", selectedProject.duration);
        setValue("url", selectedProject.url);
        setValue("summary", selectedProject.summary);
      }
    }
  }, [SelectedProjectID, Projects, setValue]);
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
          {/* <DisplayFormButton
            variant="outline-primary"
            title="Save Changes"
            type="submit"
          /> */}
        </div>
      </form>
      {Projects.map((project, index) => (
        <DisplayProject project={project} key={index} />
      ))}
    </>
  );
};

const LinkForm = () => {
  // reading links from store and then display them as display badges below form
  const Links = useSelector((state) => state.resume.initialresume.links);
  const dispatch = useDispatch();
  const { register, handleSubmit, reset, setValue } = useForm({
    defaultValues: {
      networkname: "",
      username: "",
      profileurl: "",
    },
  });
  // function to create data in store
  const onSubmit = (data) => {
    if (data.networkname.length == 0) {
      DisplayError("Network name is required");
    } else {
      dispatch(CreateLink(data));
      reset();
    }
  };
  // reading selected link id in state if it not equal to zero means something is present in state then we are going to read particular link object from state and populate form field with it
  const SelectedLinkID = useSelector(
    (state) => state.resume.SelectedDispalyInfoID.SelectedLinkID
  );
  useEffect(() => {
    if (SelectedLinkID !== 0) {
      const selectedLink = Links.find((link) => link.id === SelectedLinkID);
      if (selectedLink) {
        setValue("networkname", selectedLink.networkname);
        setValue("username", selectedLink.username);
        setValue("profileurl", selectedLink.profileurl);
      }
    }
  }, [SelectedLinkID, Links, setValue]);
  // const UpdateLink = () => {
  //   if (SelectedLinkID.length != 0) {
  //     console.log(SelectedLinkID);
  //   } else {
  //     DisplayError("Link not selected");
  //   }
  // };
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
         {/* <DisplayFormButton
            variant="outline-primary"
            title="Save Changes"
            type="submit"
            onClick={UpdateLink}
          /> */}
        </div>
      </form>
      {Links?.map((link, index) => (
        <DisplayLink link={link} key={index} />
      ))}
    </>
  );
};

const EducationForm = () => {
  const Educations = useSelector(
    (state) => state.resume.initialresume.educations
  );
  const dispatch = useDispatch();
  const { register, handleSubmit, reset, setValue } = useForm({
    defaultValues: {
      universityname: "",
      degreename: "",
      grade: "",
      duration: "",
      summary: "",
    },
  });
  const onSubmit = (data) => {
    if (data.universityname.length == 0) {
      DisplayError("University name is required");
    } else {
      dispatch(CreateEducation(data));
      reset();
    }
  };
  const SelectedEducationID = useSelector(
    (state) => state.resume.SelectedDispalyInfoID.SelectedEducationID
  );
  useEffect(() => {
    if (SelectedEducationID !== 0) {
      const selectedEducation = Educations.find(
        (link) => link.id === SelectedEducationID
      );
      if (selectedEducation) {
        setValue("universityname", selectedEducation.universityname);
        setValue("degreename", selectedEducation.degreename);
        setValue("grade", selectedEducation.grade);
        setValue("duration", selectedEducation.duration);
        setValue("summary", selectedEducation.summary);
      }
    }
  }, [SelectedEducationID, Educations, setValue]);
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
          {/* <DisplayFormButton
            variant="outline-primary"
            title="Save Changes"
            type="submit"
          /> */}
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
