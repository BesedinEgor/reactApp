import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { MantineProvider, Button, TextInput, Checkbox } from '@mantine/core';
// import { OutputTasks} from './OutputTasks';
import { randomId } from '../../js';

const TodoList = ({ items }) => {
  const [output, setOutput] = useState({});
  const [copyItems, setCopyItems] = useState(items);

  TodoList.propTypes = {
    items: PropTypes.array.isRequired,
  };

  const btnHundler = (e) => {
    setCopyItems([...copyItems, output]);
    e.preventDefault();
    console.log(output);
    console.log(items);
    console.log(copyItems);
  };
  return (
    <MantineProvider>
      <h1
        className="title"
        style={{ textAlign: 'center', textTransform: 'uppercase' }}
      >
        Todo list
      </h1>
      <Link className="back" to={'/'}>
        Back
      </Link>
      <div className="todo">
        <form className="todo__form">
          <TextInput
            className="todo__input"
            placeholder="Tasks"
            description="Поле для ввода текста"
            radius="md"
            value={output.title}
            onChange={(event) => {
              setOutput({id: randomId(), title: event.target.value});
            }}
          />
          <Button
            className="todo__button"
            type="submit"
            variant="gradient"
            gradient={{ from: 'teal', to: 'lime', deg: 105 }}
            onClick={btnHundler}
          >
            Показать
          </Button>
        </form>
        <div className="todoList">
          {items.map((listItem) => {
            return (
              <div key={listItem.id}>
                <Checkbox
                  className="todoList__checkbox"
                  label={listItem.title}
                />
              </div>
            );
          })}
        </div>
      </div>
    </MantineProvider>
  );
};

export { TodoList };
