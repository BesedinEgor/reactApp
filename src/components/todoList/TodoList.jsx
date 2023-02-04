import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { MantineProvider, Button, TextInput, Checkbox } from '@mantine/core';
import { randomId } from '../../js';

const TodoList = ({ items }) => {
  const [output, setOutput] = useState(''); //input
  const [list, setList] = useState(items); //list items

  TodoList.propTypes = {
    items: PropTypes.array.isRequired,
  };

  const handlerInput = (event) => {
    setOutput(event.target.value);
  };

  const handlerButton = (event) => {
    if (output.length > 0) {
      setList([...list, {id: randomId(), title: output} ])
      event.preventDefault();
    }
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
            value={items.title}
            onChange={handlerInput}
          />
          <Button
            className="todo__button"
            type="submit"
            variant="gradient"
            gradient={{ from: 'teal', to: 'lime', deg: 105 }}
            onClick={handlerButton}
          >
            Показать
          </Button>
        </form>
        <div className="todoList">
          {list.map((listItem) => {
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
