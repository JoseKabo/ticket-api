import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, MaxLength, Matches } from "class-validator";

export class SignInDto {
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
    description: 'should contains 1 upper 1number 1 symbol',
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
  