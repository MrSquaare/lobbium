import { useForm } from "@tanstack/react-form";
import { useMutation } from "@tanstack/react-query";
import { Link } from "expo-router";
import { View, TextInput, Button, Text } from "react-native";
import { StyleSheet } from "react-native-unistyles";
import { z } from "zod";

import { authClient } from "../../lib/auth";

const formSchema = z.object({
  email: z.email(),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export default function SignIn() {
  const signIn = useMutation({
    mutationFn: async (values: z.infer<typeof formSchema>) => {
      return authClient.signIn.email(values);
    },
  });

  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    validators: {
      onSubmit: formSchema,
    },
    onSubmit: ({ value }) => {
      signIn.mutate(value);
    },
  });

  const error = signIn.error?.message ?? signIn.data?.error?.message;

  return (
    <View style={styles.container}>
      {signIn.isPending ? (
        <Text>Loading...</Text>
      ) : error ? (
        <Text>Error: {error}</Text>
      ) : null}
      <View style={styles.form}>
        <form.Field name={"email"}>
          {(field) => (
            <TextInput
              autoCapitalize={"none"}
              autoComplete={"email"}
              autoCorrect={false}
              keyboardType={"email-address"}
              onChangeText={field.handleChange}
              placeholder={"Email"}
              textContentType={"emailAddress"}
              value={field.state.value}
            />
          )}
        </form.Field>
        <form.Field name={"password"}>
          {(field) => (
            <TextInput
              autoCapitalize={"none"}
              autoComplete={"password"}
              autoCorrect={false}
              onChangeText={field.handleChange}
              placeholder={"Password"}
              secureTextEntry
              textContentType={"password"}
              value={field.state.value}
            />
          )}
        </form.Field>
        <Button
          onPress={() => {
            form.handleSubmit();
          }}
          title={"Sign In"}
        />
      </View>
      <Link asChild href={"/auth/sign-up"}>
        <Button title={"Go to Sign Up"} />
      </Link>
      <Link asChild href={"/"}>
        <Button title={"Go to Home"} />
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },
  form: {
    width: "80%",
  },
});
