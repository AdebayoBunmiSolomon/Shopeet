import React from "react";
import { Text, View, TextInput } from "react-native";
import { postReviewStyle } from "./Style";

const PostReview: React.FunctionComponent<{}> = () => {
  return (
    <View style={postReviewStyle.container}>
      <View>
        <TextInput
          placeholder='post your review'
          style={postReviewStyle.textInput}
          multiline={true}></TextInput>
      </View>
    </View>
  );
};

export default PostReview;
