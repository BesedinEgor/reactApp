import { React } from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { MantineProvider, Button, TextInput } from '@mantine/core';

const TodoList = ({ items }) => {
  TodoList.propTypes = {
    items: PropTypes.object.isRequired,
  };
  console.log(items);
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
      <form className="todo">
        <TextInput
          placeholder="Your name"
          description="Поле для ввода текста"
          radius="md"
        />
        <Button
          className="todo__button"
          type="submit"
          variant="gradient"
          gradient={{ from: 'teal', to: 'lime', deg: 105 }}
        >
          Показать
        </Button>
      </form>
      <ul className="todoItems">
        <li className="todoItems__item">{items[0].title}</li>
        <li className="todoItems__item">{items[1].title}</li>
      </ul>
    </MantineProvider>
  );
};

export { TodoList };
