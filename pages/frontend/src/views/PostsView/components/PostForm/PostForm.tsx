import axios from "axios";
import { BaseSyntheticEvent, useState } from "react";

import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const init_values = {
  title: "",
  content: "",
};

enum EStatus {
  SUBMITTING,
  NORMAL,
  SUBMITTED,
}

const PostForm = () => {
  const [values, setValues] = useState(init_values);
  const [status, setStatus] = useState<EStatus>(EStatus.NORMAL);

  const handleChange = (e: BaseSyntheticEvent) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (status !== EStatus.SUBMITTING) {
      setStatus(EStatus.SUBMITTING);
      const res = axios.post("/api", values);
      setStatus(EStatus.SUBMITTED);
    }
  };

  return (
    <Form>
      <Form.Group>
        <Form.Label>Title</Form.Label>
        <FormControl
          name="title"
          placeholder="Title"
          value={values.title}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Content</Form.Label>
        <FormControl
          name="content"
          placeholder="Content"
          as="textarea"
          rows={5}
          value={values.content}
          onChange={handleChange}
        />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Post
      </Button>
    </Form>
  );
};

export default PostForm;
