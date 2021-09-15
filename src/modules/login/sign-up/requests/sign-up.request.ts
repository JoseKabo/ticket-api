import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, Matches, IsNotEmpty, MaxLength } from 'class-validator';

export class SignUpDto {
  @ApiProperty({
    description: 'This is email field',
    maxLength: 75,
    default: 'test@test.com',
  })
  @IsEmail()
  @IsNotEmpty()
  @MaxLength(75)
  email: string;

  @ApiProperty({
    description: 'This is a password field',
    maxLength: 75,
    default: 'Test12345#',
  })
  @IsEmail()
  @IsNotEmpty()
  @MaxLength(10)
  @Matches(
    '^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[@$!%*?&])[A-Za-zd@$!%*?&]{10,}$',
  )
  password: string;
}
