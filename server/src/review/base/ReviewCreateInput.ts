/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ProductCreateNestedManyWithoutReviewsInput } from "./ProductCreateNestedManyWithoutReviewsInput";
import { ValidateNested, IsOptional, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";

@InputType()
class ReviewCreateInput {
  @ApiProperty({
    required: false,
    type: () => ProductCreateNestedManyWithoutReviewsInput,
  })
  @ValidateNested()
  @Type(() => ProductCreateNestedManyWithoutReviewsInput)
  @IsOptional()
  @Field(() => ProductCreateNestedManyWithoutReviewsInput, {
    nullable: true,
  })
  products?: ProductCreateNestedManyWithoutReviewsInput;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Field(() => Number)
  rating!: number;

  @ApiProperty({
    required: true,
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @Field(() => UserWhereUniqueInput)
  user!: UserWhereUniqueInput;
}

export { ReviewCreateInput as ReviewCreateInput };