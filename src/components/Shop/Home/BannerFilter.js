"use client";
import React from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import DatePicker from "@/components/Utils/DatePicker";
import InputWithIcon from "@/components/Utils/InputWithIcon";
import { MapPin } from "lucide-react";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

const BannerFilter = () => {
  const form = useForm({ resolver: zodResolver(formSchema) });

  const onSubmit = (values) => {
    console.log("Filter onSubmit, ", values);
  };
  return (
    <React.Fragment>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-row gap-1"
        >
          <FormField
            control={form.control}
            name="destination"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <InputWithIcon
                    icon={<MapPin />}
                    placeholder="Wher you go"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="date"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <DatePicker placeholder="Wher you go" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="font-bold">
            Find Now
          </Button>
        </form>
      </Form>
    </React.Fragment>
  );
};

export default BannerFilter;
