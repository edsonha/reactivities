import React from 'react';
import { Card, Image, Button } from 'semantic-ui-react';
import { Activity } from '../../../app/models/activity';

interface Props {
    activity: Activity;
    cancelSelectActivity: () => void;
    openForm: (id: string) => void;
    // setEditMode: (editMode: boolean) => void;
    // setSelectedActivity: (activity: IActivity | null) => void;
}

const ActivityDetails: React.FC<Props> = ({activity, cancelSelectActivity, openForm}) => {
  return (
    <Card fluid>
      <Image src={`/assets/categoryImages/${activity.category}.jpg`} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{activity.title}</Card.Header>
        <Card.Meta>
          <span>{activity.date}</span>
        </Card.Meta>
        <Card.Description>
          {activity.description}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button.Group widths={2}>
            <Button basic onClick={() => openForm(activity.id)} color='blue' content='Edit' />
            <Button basic onClick={cancelSelectActivity}color='grey' content='Cancel' />
        </Button.Group>
      </Card.Content>
    </Card>
  );
};

export default ActivityDetails;