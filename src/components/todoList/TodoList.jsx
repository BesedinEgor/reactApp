import { React } from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { MantineProvider, Button, TextInput, Checkbox } from '@mantine/core';

const TodoList = ({ items }) => {
  TodoList.propTypes = {
    items: PropTypes.object.isRequired,
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
        <div className="todoList">
          {items.map((listItem) => {
            return (
              <Checkbox
                className="todoList__checkbox"
                label={listItem.title}
                key={items.id}
              />
            );
          })}
        </div>
      </div>
    </MantineProvider>
  );
};

export { TodoList };
