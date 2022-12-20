import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { MantineProvider, Button, TextInput } from '@mantine/core';
import { OutputTasks } from './OutputTasks';

const TodoList = ({ items }) => {
  const [output, setOutput] = useState('hi');

  TodoList.propTypes = {
    items: PropTypes.array.isRequired,
  };

  const btnHundler = (e) => {
    e.preventDefault();
    console.log(output);
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
            onChange={(event) => {
              setOutput(event.currentTarget.value);
            }}
            defaultValue={output}
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
          <OutputTasks items={items} />
        </div>
      </div>
    </MantineProvider>
  );
};

export { TodoList };
