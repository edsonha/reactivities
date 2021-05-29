import React, { useState, ChangeEvent } from 'react';
import { Segment, Form, Button } from 'semantic-ui-react';
import { Activity } from '../../../app/models/activity';

interface Props {
  activity: Activity | undefined;
  closeForm: () => void;
  createOrEdit: (activity: Activity) => void;
  submitting: boolean
}

const ActivityForm: React.FC<Props> = ({
  activity: selectedActivity,
  closeForm,
  createOrEdit,
  submitting
}) => {
  const initialState = selectedActivity ?? {
    id: '',
    title: '',
    category: '',
    description: '',
    date: '',
    city: '',
    venue: ''
  };

  const [activity, setActivity] = useState<Activity>(initialState);

  const handleSubmit = () => {
    createOrEdit(activity)
  };

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setActivity({ ...activity, [name]: value });
  };

  return (
    <Segment clearing>
      <Form onSubmit={handleSubmit} autoComplete='off'>
        <Form.Input
          onChange={handleInputChange}
          name='title'
          placeholder='Title'
          value={activity.title}
        />
        <Form.TextArea
          onChange={handleInputChange}
          name='description'
          rows={2}
          placeholder='Description'
          value={activity.description}
        />
        <Form.Input
          onChange={handleInputChange}
          name='category'
          placeholder='Category'
          value={activity.category}
        />
        <Form.Input
          onChange={handleInputChange}
          name='date'
          type='date'
          placeholder='Date'
          value={activity.date}
        />
        <Form.Input
          onChange={handleInputChange}
          name='city'
          placeholder='City'
          value={activity.city}
        />
        <Form.Input
          onChange={handleInputChange}
          name='venue'
          placeholder='Venue'
          value={activity.venue}
        />
        <Button 
          floated='right' 
          positive 
          type='submit' 
          content='Submit'
          loading={submitting} 
        />
        <Button
          onClick={closeForm}
          floated='right'
          type='button'
          content='Cancel'
        />
      </Form>
    </Segment>
  );
};

export default ActivityForm;