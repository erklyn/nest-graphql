import { Field, InputType } from '@nestjs/graphql';
import { IsString } from 'class-validator';

@InputType()
export class CreatePetInput {
  @IsString()
  @Field()
  name: string;

  @Field({ nullable: true })
  type?: string;
}
