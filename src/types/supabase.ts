export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  public: {
    Tables: {
      consult_answer: {
        Row: {
          answer: string;
          answer_id: string;
          consult_id: string;
          department: string;
          user_id: string | null;
        };
        Insert: {
          answer: string;
          answer_id?: string;
          consult_id: string;
          department: string;
          user_id?: string | null;
        };
        Update: {
          answer?: string;
          answer_id?: string;
          consult_id?: string;
          department?: string;
          user_id?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "public_consult_answer_consult_id_fkey";
            columns: ["consult_id"];
            isOneToOne: false;
            referencedRelation: "consult_info";
            referencedColumns: ["consult_id"];
          },
          {
            foreignKeyName: "public_consult_answer_user_id_fkey";
            columns: ["user_id"];
            isOneToOne: false;
            referencedRelation: "user_info";
            referencedColumns: ["user_id"];
          }
        ];
      };
      consult_hashtags: {
        Row: {
          consult_id: string;
          hashtags_id: string;
          hastags: string | null;
        };
        Insert: {
          consult_id?: string;
          hashtags_id?: string;
          hastags?: string | null;
        };
        Update: {
          consult_id?: string;
          hashtags_id?: string;
          hastags?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "public_consult_hashtags_consult_id_fkey";
            columns: ["consult_id"];
            isOneToOne: false;
            referencedRelation: "consult_info";
            referencedColumns: ["consult_id"];
          }
        ];
      };
      consult_info: {
        Row: {
          bodyparts: string | null;
          consult_content: string | null;
          consult_id: string;
          consult_title: string | null;
          created_at: string;
          hashtags: string[] | null;
          photos: string | null;
          user_email: string | null;
          user_name: string | null;
        };
        Insert: {
          bodyparts?: string | null;
          consult_content?: string | null;
          consult_id: string;
          consult_title?: string | null;
          created_at?: string;
          hashtags?: string[] | null;
          photos?: string | null;
          user_email?: string | null;
          user_name?: string | null;
        };
        Update: {
          bodyparts?: string | null;
          consult_content?: string | null;
          consult_id?: string;
          consult_title?: string | null;
          created_at?: string;
          hashtags?: string[] | null;
          photos?: string | null;
          user_email?: string | null;
          user_name?: string | null;
        };
        Relationships: [];
      };
      consult_photos: {
        Row: {
          consult_id: string;
          photo_id: string;
          photos: string;
        };
        Insert: {
          consult_id: string;
          photo_id?: string;
          photos: string;
        };
        Update: {
          consult_id?: string;
          photo_id?: string;
          photos?: string;
        };
        Relationships: [
          {
            foreignKeyName: "public_consult_photos_consult_id_fkey";
            columns: ["consult_id"];
            isOneToOne: false;
            referencedRelation: "consult_info";
            referencedColumns: ["consult_id"];
          }
        ];
      };
      consult_test: {
        Row: {
          body_section: string;
          id: string;
          tag1: string | null;
          tag10: string | null;
          tag2: string | null;
          tag3: string | null;
          tag4: string | null;
          tag5: string | null;
          tag6: string | null;
          tag7: string | null;
          tag8: string | null;
          tag9: string | null;
        };
        Insert: {
          body_section: string;
          id?: string;
          tag1?: string | null;
          tag10?: string | null;
          tag2?: string | null;
          tag3?: string | null;
          tag4?: string | null;
          tag5?: string | null;
          tag6?: string | null;
          tag7?: string | null;
          tag8?: string | null;
          tag9?: string | null;
        };
        Update: {
          body_section?: string;
          id?: string;
          tag1?: string | null;
          tag10?: string | null;
          tag2?: string | null;
          tag3?: string | null;
          tag4?: string | null;
          tag5?: string | null;
          tag6?: string | null;
          tag7?: string | null;
          tag8?: string | null;
          tag9?: string | null;
        };
        Relationships: [];
      };
      course_info: {
        Row: {
          course_detail: string;
          course_id: string;
          course_name: string;
          course_price: number | null;
          hospital_id: string | null;
        };
        Insert: {
          course_detail: string;
          course_id?: string;
          course_name: string;
          course_price?: number | null;
          hospital_id?: string | null;
        };
        Update: {
          course_detail?: string;
          course_id?: string;
          course_name?: string;
          course_price?: number | null;
          hospital_id?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "public_course_info_hospital_id_fkey";
            columns: ["hospital_id"];
            isOneToOne: false;
            referencedRelation: "hospital_info";
            referencedColumns: ["hospital_id"];
          }
        ];
      };
      hospital_info: {
        Row: {
          end_time: string;
          hospital_address: string;
          hospital_contact: string;
          hospital_id: string;
          hospital_image: string;
          hospital_introduction: string;
          hospital_latitude: number | null;
          hospital_longitude: number | null;
          hospital_name: string;
          start_time: string;
        };
        Insert: {
          end_time: string;
          hospital_address: string;
          hospital_contact: string;
          hospital_id?: string;
          hospital_image: string;
          hospital_introduction: string;
          hospital_latitude?: number | null;
          hospital_longitude?: number | null;
          hospital_name: string;
          start_time: string;
        };
        Update: {
          end_time?: string;
          hospital_address?: string;
          hospital_contact?: string;
          hospital_id?: string;
          hospital_image?: string;
          hospital_introduction?: string;
          hospital_latitude?: number | null;
          hospital_longitude?: number | null;
          hospital_name?: string;
          start_time?: string;
        };
        Relationships: [];
      };
      possible_disease: {
        Row: {
          bodyparts: string | null;
          disease_id: string;
          disease_name: string;
          symptom1: boolean | null;
          symptom10: boolean | null;
          symptom11: boolean | null;
          symptom12: boolean | null;
          symptom2: boolean | null;
          symptom3: boolean | null;
          symptom4: boolean | null;
          symptom5: boolean | null;
          symptom6: boolean | null;
          symptom7: boolean | null;
          symptom8: boolean | null;
          symptom9: boolean | null;
        };
        Insert: {
          bodyparts?: string | null;
          disease_id?: string;
          disease_name: string;
          symptom1?: boolean | null;
          symptom10?: boolean | null;
          symptom11?: boolean | null;
          symptom12?: boolean | null;
          symptom2?: boolean | null;
          symptom3?: boolean | null;
          symptom4?: boolean | null;
          symptom5?: boolean | null;
          symptom6?: boolean | null;
          symptom7?: boolean | null;
          symptom8?: boolean | null;
          symptom9?: boolean | null;
        };
        Update: {
          bodyparts?: string | null;
          disease_id?: string;
          disease_name?: string;
          symptom1?: boolean | null;
          symptom10?: boolean | null;
          symptom11?: boolean | null;
          symptom12?: boolean | null;
          symptom2?: boolean | null;
          symptom3?: boolean | null;
          symptom4?: boolean | null;
          symptom5?: boolean | null;
          symptom6?: boolean | null;
          symptom7?: boolean | null;
          symptom8?: boolean | null;
          symptom9?: boolean | null;
        };
        Relationships: [];
      };
      reservation_info: {
        Row: {
          apply_date: string | null;
          apply_time: string | null;
          course_id: string | null;
          hospital_id: string | null;
          hospital_name: string | null;
          program_detail: string | null;
          program_id: string | null;
          program_name: string | null;
          reservation_id: string;
          status: string | null;
          subject_birth_date: string | null;
          subject_name: string | null;
          subject_phone_number: string | null;
          user_email: string;
          user_name: string | null;
        };
        Insert: {
          apply_date?: string | null;
          apply_time?: string | null;
          course_id?: string | null;
          hospital_id?: string | null;
          hospital_name?: string | null;
          program_detail?: string | null;
          program_id?: string | null;
          program_name?: string | null;
          reservation_id?: string;
          status?: string | null;
          subject_birth_date?: string | null;
          subject_name?: string | null;
          subject_phone_number?: string | null;
          user_email: string;
          user_name?: string | null;
        };
        Update: {
          apply_date?: string | null;
          apply_time?: string | null;
          course_id?: string | null;
          hospital_id?: string | null;
          hospital_name?: string | null;
          program_detail?: string | null;
          program_id?: string | null;
          program_name?: string | null;
          reservation_id?: string;
          status?: string | null;
          subject_birth_date?: string | null;
          subject_name?: string | null;
          subject_phone_number?: string | null;
          user_email?: string;
          user_name?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "public_reservation_info_course_id_fkey";
            columns: ["course_id"];
            isOneToOne: false;
            referencedRelation: "course_info";
            referencedColumns: ["course_id"];
          }
        ];
      };
      review_hashtags: {
        Row: {
          id: string;
          tag1: string;
          tag10: string | null;
          tag11: string | null;
          tag12: string | null;
          tag2: string | null;
          tag3: string | null;
          tag4: string | null;
          tag5: string | null;
          tag6: string | null;
          tag7: string | null;
          tag8: string | null;
          tag9: string | null;
        };
        Insert: {
          id?: string;
          tag1: string;
          tag10?: string | null;
          tag11?: string | null;
          tag12?: string | null;
          tag2?: string | null;
          tag3?: string | null;
          tag4?: string | null;
          tag5?: string | null;
          tag6?: string | null;
          tag7?: string | null;
          tag8?: string | null;
          tag9?: string | null;
        };
        Update: {
          id?: string;
          tag1?: string;
          tag10?: string | null;
          tag11?: string | null;
          tag12?: string | null;
          tag2?: string | null;
          tag3?: string | null;
          tag4?: string | null;
          tag5?: string | null;
          tag6?: string | null;
          tag7?: string | null;
          tag8?: string | null;
          tag9?: string | null;
        };
        Relationships: [];
      };
      review_info: {
        Row: {
          content: string;
          created_at: string;
          hashtags: string | null;
          rating: number;
          review_id: string;
        };
        Insert: {
          content: string;
          created_at?: string;
          hashtags?: string | null;
          rating: number;
          review_id?: string;
        };
        Update: {
          content?: string;
          created_at?: string;
          hashtags?: string | null;
          rating?: number;
          review_id?: string;
        };
        Relationships: [];
      };
      review_photos: {
        Row: {
          photo_id: string;
          photos: string;
          review_id: string;
        };
        Insert: {
          photo_id?: string;
          photos: string;
          review_id: string;
        };
        Update: {
          photo_id?: string;
          photos?: string;
          review_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "public_review_photos_review_id_fkey";
            columns: ["review_id"];
            isOneToOne: false;
            referencedRelation: "review_info";
            referencedColumns: ["review_id"];
          }
        ];
      };
      scrapped_list: {
        Row: {
          hospital_id: string;
          scrap_id: string;
          user_id: string;
        };
        Insert: {
          hospital_id?: string;
          scrap_id?: string;
          user_id: string;
        };
        Update: {
          hospital_id?: string;
          scrap_id?: string;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "public_scrapped_list_hospital_id_fkey";
            columns: ["hospital_id"];
            isOneToOne: false;
            referencedRelation: "hospital_info";
            referencedColumns: ["hospital_id"];
          },
          {
            foreignKeyName: "public_scrapped_list_user_id_fkey";
            columns: ["user_id"];
            isOneToOne: false;
            referencedRelation: "user_info";
            referencedColumns: ["user_id"];
          }
        ];
      };
      symptom_questions: {
        Row: {
          bodyparts: string | null;
          departments: string;
          symptom_id: string;
          symptoms: string | null;
          symptoms_abbr: string | null;
        };
        Insert: {
          bodyparts?: string | null;
          departments: string;
          symptom_id: string;
          symptoms?: string | null;
          symptoms_abbr?: string | null;
        };
        Update: {
          bodyparts?: string | null;
          departments?: string;
          symptom_id?: string;
          symptoms?: string | null;
          symptoms_abbr?: string | null;
        };
        Relationships: [];
      };
      user_info: {
        Row: {
          provider: string;
          user_email: string;
          user_id: string;
          user_name: string;
          user_type: string;
        };
        Insert: {
          provider: string;
          user_email: string;
          user_id: string;
          user_name: string;
          user_type?: string;
        };
        Update: {
          provider?: string;
          user_email?: string;
          user_id?: string;
          user_name?: string;
          user_type?: string;
        };
        Relationships: [
          {
            foreignKeyName: "public_user_info_user_id_fkey";
            columns: ["user_id"];
            isOneToOne: true;
            referencedRelation: "users";
            referencedColumns: ["id"];
          }
        ];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};

type PublicSchema = Database[Extract<keyof Database, "public">];

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R;
      }
      ? R
      : never
    : never;

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I;
      }
      ? I
      : never
    : never;

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U;
      }
      ? U
      : never
    : never;

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never;
