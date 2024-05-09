import React, { useState } from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`
  background-color: #2C3E50; /* Dark blue background */
  color: white;
  max-width: 400px;
  margin: auto;
  padding: 20px;
  border-radius: 8px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 10px;
`;

const Input = styled.input`
  padding: 8px;
  margin-top: 5px;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

const ErrorMsg = styled.p`
  color: red;
  font-size: 12px;
`;

const Button = styled.button`
  background-color: #3498DB;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 10px;
`;

function SignupPage() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    age: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({});

  const validateInput = (name, value) => {
    let errorMsg = '';
    switch (name) {
      case 'username':
        if (!value) errorMsg = '이름을 입력해주세요!';
        break;
      case 'email':
        if (!value) {
          errorMsg = '이베일을 입력해주세요!';
        } else if (!/\S+@\S+\.\S+/.test(value)) {
          errorMsg = '이메일 형식에 맞게 다시 입력해주세요!';
        }
        break;
      case 'age':
        const age = parseInt(value, 10);
        if (!value) {
          errorMsg = '나이는 숫자로 입력해주세요!';
        } else if (isNaN(age)) {
          errorMsg = '나이는 숫자로 입력해주세요!';
        } else if (age < 0) {
          errorMsg = '나이는 양수여야 합니다.';
        } else if (age % 1 !== 0) {
          errorMsg = '나이를 실수로 입력할 수 없습니다.';
        } else if (age < 19) {
          errorMsg = '19세 이상만 사용 가능합니다!';
        }
        break;
      case 'password':
        if (!value) {
          errorMsg = '비밀번호를 입력해주세요!';
        } else if (value.length < 4) {
          errorMsg = '최소 4자리 이상 입력해주세요.';
        } else if (value.length > 12) {
          errorMsg = '최대 12자리까지 작성할 수 있습니다.';
        } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W]).+$/.test(value)) {
          errorMsg = '비밀번호는 영어, 숫자, 특수문자를 포함해주세요.';
        }
        break;
      case 'confirmPassword':
        if (!value) {
          errorMsg = '비밀번호를 다시 입력해주세요!';
        } else if (value !== formData.password) {
          errorMsg = '비밀번호가 일치하지 않습니다.';
        }
        break;
      default:
        break;
    }
    return errorMsg;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const error = validateInput(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if any errors exist before submitting
    if (Object.values(errors).every(error => error === '') && Object.values(formData).every(field => field !== '')) {
      console.log('Form Data:', formData);
      alert('Registration successful!');
      window.location.href = '/home'; // Redirect to homepage, change this to your homepage URL
    } else {
      console.log('Validation errors must be resolved before submitting.');
    }
  };

  const canSubmit = Object.values(errors).every(error => error === '') && Object.values(formData).every(field => field !== '');

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <Label>
          Username:
          <Input type="text" name="username" value={formData.username} onChange={handleChange} />
          {errors.username && <ErrorMsg>{errors.username}</ErrorMsg>}
        </Label>
        <Label>
          Email:
          <Input type="email" name="email" value={formData.email} onChange={handleChange} />
          {errors.email && <ErrorMsg>{errors.email}</ErrorMsg>}
        </Label>
        <Label>
          Age:
          <Input type="text" name="age" value={formData.age} onChange={handleChange} />
          {errors.age && <ErrorMsg>{errors.age}</ErrorMsg>}
        </Label>
        <Label>
          Password:
          <Input type="password" name="password" value={formData.password} onChange={handleChange} />
          {errors.password && <ErrorMsg>{errors.password}</ErrorMsg>}
        </Label>
        <Label>
          Confirm Password:
          <Input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />
          {errors.confirmPassword && <ErrorMsg>{errors.confirmPassword}</ErrorMsg>}
        </Label>
        <Button type="submit" disabled={!canSubmit}>Sign Up</Button>
      </Form>
    </FormContainer>
  );
}

export default SignupPage;
