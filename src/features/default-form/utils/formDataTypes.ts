// export interface FormDto {
//   form: {
//     title: string;
//     manual_url: string;
//   };
//   fields: {
//     __nogroup: {
//       props: FormItem[];
//     };
//   };
// }
export interface FormItem {
  prop_id: string;
  type: string;
  tpl_key: string | number;
  title: string;
  required: string;
}

export interface FormDto {
  fields: {
    __nogroup: {
      props: Record<string, FormItem>;
    };
  };
  form: {
    manual_url: string;
  };
}
