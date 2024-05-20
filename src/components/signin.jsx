"use client";
import React, { useReducer } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { login } from "@/lib/authService";
import InputField from "@/components/InputField";
import FormLayout from "@/components/FormLayout";
import { initialState, reducer } from "@/reducers/signInReducer";

export function SignIn() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "SET_LOADING", payload: true });
    dispatch({ type: "SET_RESPONSE_MESSAGE", payload: "" });

    try {
      await login(state.email, state.password);
      dispatch({ type: "SET_RESPONSE_MESSAGE", payload: "Login successful!" });
      router.push("/admin");
    } catch (error) {
      dispatch({ type: "SET_RESPONSE_MESSAGE", payload: error.message });
    } finally {
      dispatch({ type: "SET_LOADING", payload: false });
    }
  };

  return (
    <FormLayout onSubmit={handleSubmit}>
      <InputField
        id="email"
        label="Email"
        type="email"
        placeholder="m@example.com"
        value={state.email}
        onChange={(e) =>
          dispatch({ type: "SET_EMAIL", payload: e.target.value })
        }
      />
      <div className="space-y-2">
        <InputField
          id="password"
          label="Password"
          type="password"
          placeholder="Your password"
          value={state.password}
          onChange={(e) =>
            dispatch({ type: "SET_PASSWORD", payload: e.target.value })
          }
        />
        <div className="flex items-center justify-end">
          <Link
            className="text-sm font-medium text-gray-900 hover:underline dark:text-gray-50"
            href="#"
          >
            Forgot password?
          </Link>
        </div>
      </div>
      <Button className="w-full" type="submit" disabled={state.isLoading}>
        {state.isLoading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Please Wait
          </>
        ) : (
          "Sign in"
        )}
      </Button>
      {state.responseMessage && (
        <p className="text-red-500">{state.responseMessage}</p>
      )}
    </FormLayout>
  );
}
