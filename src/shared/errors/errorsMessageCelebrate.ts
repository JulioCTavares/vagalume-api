import { CelebrateError } from "celebrate";

interface IData {
  field: string;
  missingField: string;
  type: string;
  validValues?: string;
}

interface IResponse {
  message: string;
  field: string;
}

const translateField = (field: string): string => {
  switch (field) {
    case "name":
    case "user.name":
      return "nome";
    case "document":
    case "user.document":
      return "documento";
    case "address":
    case "user.address":
      return "endereço";
    case "user.email":
      return "email";
    case "phone":
    case "user.phone":
      return "telefone";
    case "active":
    case "user.active":
      return "ativo";
    case "user.role":
      return "role";
    case "password":
    case "user.password":
      return "senha";
    default:
      return field;
  }
};

const messages = ({
  field,
  type,
  validValues,
  missingField,
}: IData): IResponse => {
  switch (type) {
    case "any.required":
      return {
        message: `O campo ${translateField(field)} é obrigatório`,
        field,
      };
    case "object.unknown":
      return {
        message: `O campo ${translateField(field)} não e permitido`,
        field,
      };
    case "object.and":
      return {
        message: `O campo ${translateField(missingField)} está faltando`,
        field: missingField,
      };
    case "string.pattern.base":
      return {
        message: `O campo ${translateField(field)} está com formato inválido`,
        field,
      };
    case "string.email":
      return {
        message: `O campo ${translateField(field)} está com formato inválido`,
        field,
      };
    case "array.base":
      return {
        message: `O campo ${translateField(field)} deve ser um array`,
        field,
      };
    case "number.base":
      return {
        message: `O campo ${translateField(field)} deve ser um número`,
        field,
      };
    case "boolean.base":
      return {
        message: `O campo ${translateField(
          field
        )} deve ser verdadeiro ou falso`,
        field,
      };
    case "string.empty":
      return {
        message: `O campo ${translateField(field)} não pode estar vazio`,
        field,
      };
    case "string.min":
      return {
        message: `O campo ${translateField(
          field
        )} contém menos caracteres que o permitido`,
        field,
      };
    case "string.max":
      return {
        message: `O campo ${translateField(
          field
        )} contém mais caracteres que o permitido`,
        field,
      };
    case "any.only":
      return {
        message: `Para o campo ${translateField(
          field
        )} os valores permitidos são [${validValues}]`,
        field,
      };
    case "string.guid":
      return {
        message: `O campo ${translateField(field)} deve ser um UUID válido`,
        field,
      };
    default:
      return {
        message: "",
        field,
      };
  }
};

const errorsMessageCelebrate = (err: CelebrateError): IResponse => {
  let message: IResponse = {} as IResponse;
  err.details.forEach((val) => {
    const field = val.details[0].context?.label || "";
    const missingField =
      (val.details[0].context?.missing && val.details[0].context.missing[0]) ||
      "";
    const { type } = val.details[0];

    console.log(val.details[0]);

    message = messages({
      field,
      missingField,
      type,
      validValues: type === "any.only" ? val.details[0].context?.valids : "",
    });
  });

  return message;
};

export { errorsMessageCelebrate };
