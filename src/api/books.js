import { createClient } from "@supabase/supabase-js";
const supabaseUrl = import.meta.env.SUPABASE_URL;
const supabaseKey = import.meta.env.SUPABASE_ANON_KEY;
const userId = import.meta.env.SUPABASE_USER_ID;
const supabase = createClient(supabaseUrl, supabaseKey);

export const getBooks = async () => {
  try {
    const { data: books, error } = await supabase
      .from("books")
      .select()
      .eq("owner", userId);

    if (error) throw error;

    return books;
  } catch (error) {
    console.log(error);
  }
};

export const getReadBooks = async () => {
  try {
    const { data: books, error } = await supabase
      .from("books")
      .select()
      .eq("owner", userId)
      .eq("status", "read")
      .order("finished", { ascending: false });

    if (error) throw error;

    return books;
  } catch (error) {
    console.log(error);
  }
};

export const getReadingBooks = async () => {
  try {
    const { data: books, error } = await supabase
      .from("books")
      .select()
      .eq("owner", userId)
      .eq("status", "reading");

    if (error) throw error;

    return books;
  } catch (error) {
    console.log(error);
  }
};
