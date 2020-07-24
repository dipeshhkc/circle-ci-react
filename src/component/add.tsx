import React, { useState, useEffect } from 'react';
import { Input } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

function Add() {
  const [first, setFirst] = useState('');
  const [second, setSecond] = useState('');
  const [output, setOutput] = useState<Number | ''>('');

  useEffect(() => {
    if (first && second) {
      setOutput(Number(first) + Number(second));
    } else if (first) {
      setOutput(Number(first));
    } else if (second) {
      setOutput(Number(second));
    }
  }, [first, second]);

  return (
    <>
      <div className="add">
        <Input
          name='first'
          onChange={(e) => setFirst(e.target.value)}
          placeholder="First Number"
        />
        <PlusOutlined
          style={{ marginLeft: 30, marginRight: 30, color: '#000' }}
        />
        <Input
          name='second'
          onChange={(e) => setSecond(e.target.value)}
          placeholder="Second Number"
        />
      </div>
      
        <h2 style={{ marginTop: 20 }}>
          Sum is <span data-testid="output" style={{ fontSize: 30 }}>{output}</span>
        </h2>
      
    </>
  );
}

export default Add;
