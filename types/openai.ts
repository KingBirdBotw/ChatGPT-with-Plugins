import { OPENAI_API_TYPE } from '../utils/app/const';

export interface OpenAIModel {
  id: string;
  name: string;
  maxLength: number; // maximum length of a message
  tokenLimit: number;
}

export enum OpenAIModelID {
  GPT_3_5 = 'gpt-3.5-turbo',
  GPT_3_5_0301 = 'gpt-3.5-turbo-0301',
  GPT_3_5_AZ = 'gpt-35-turbo',
  GPT_4 = 'gpt-4',
  GPT_4_0314 = 'gpt-4-0314',
  GPT_4_0613 = 'gpt-4-0613',
  GPT_4_32K = 'gpt-4-32k',
  GPT_4_32K_0613 = 'gpt-4-32k-0613',
  GPT_3_5_16K = 'gpt-3.5-turbo-16k',
  GPT_3_5_0613 = 'gpt-3.5-turbo-0613',
  GPT_3_5_16K_0613 = 'gpt-3.5-turbo-16k-0613',
  BARD = 'bard',
  BING = 'bing',
  CLAUDE_2 = 'claude-2',

}

// in case the `DEFAULT_MODEL` environment variable is not set or set to an unsupported model
export const fallbackModelID = OpenAIModelID.GPT_3_5;

export const OpenAIModels: Record<OpenAIModelID, OpenAIModel> = {
  [OpenAIModelID.GPT_3_5]: {
    id: OpenAIModelID.GPT_3_5,
    name: 'GPT-3.5-turbo',
    maxLength: 16000,
    tokenLimit: 4000,
  },
  [OpenAIModelID.GPT_3_5_0613]: {
    id: OpenAIModelID.GPT_3_5_0613,
    name: 'GPT-3.5-turbo-0613',
    maxLength: 16000,
    tokenLimit: 4000,
  },
  [OpenAIModelID.GPT_3_5_16K]: {
    id: OpenAIModelID.GPT_3_5_16K,
    name: 'GPT-3.5-turbo-16k',
    maxLength: 64000,
    tokenLimit: 16000,
  },
  [OpenAIModelID.GPT_3_5_16K_0613]: {
    id: OpenAIModelID.GPT_3_5_16K_0613,
    name: 'GPT-3.5-turbo-16k-0613',
    maxLength: 64000,
    tokenLimit: 16000,
  },
  [OpenAIModelID.GPT_3_5_AZ]: {
    id: OpenAIModelID.GPT_3_5_AZ,
    name: 'GPT-3.5-turbo-az',
    maxLength: 16000,
    tokenLimit: 4000,
  },
  [OpenAIModelID.GPT_3_5_0301]: {
    id: OpenAIModelID.GPT_3_5_0301,
    name: 'GPT-3.5-turbo-0301',
    maxLength: 16000,
    tokenLimit: 4000,
  },
  [OpenAIModelID.GPT_4]: {
    id: OpenAIModelID.GPT_4,
    name: 'GPT-4',
    maxLength: 32000,
    tokenLimit: 8000,
  },
  [OpenAIModelID.GPT_4_0314]: {
    id: OpenAIModelID.GPT_4_0314,
    name: 'GPT-4-0314',
    maxLength: 32000,
    tokenLimit: 8000,
  },
  [OpenAIModelID.GPT_4_0613]: {
    id: OpenAIModelID.GPT_4_0613,
    name: 'GPT-4-0613',
    maxLength: 32000,
    tokenLimit: 8000,
  },
  [OpenAIModelID.GPT_4]: {
    id: OpenAIModelID.GPT_4,
    name: 'GPT-4',
    maxLength: 32000,
    tokenLimit: 8000,
  },
  [OpenAIModelID.GPT_4_32K]: {
    id: OpenAIModelID.GPT_4_32K,
    name: 'GPT-4-32K',
    maxLength: 128000,
    tokenLimit: 32000,
  },
  [OpenAIModelID.GPT_4_32K_0613]: {
    id: OpenAIModelID.GPT_4_32K_0613,
    name: 'GPT-4-32K-0613',
    maxLength: 128000,
    tokenLimit: 32000,
  },
  [OpenAIModelID.GPT_3_5_16K]: {
    id: OpenAIModelID.GPT_3_5_16K,
    name: 'GPT-3.5-turbo-16K',
    maxLength: 64000,
    tokenLimit: 16000,
  },
  [OpenAIModelID.BARD]: {
    id: OpenAIModelID.BARD,
    name: 'BARD',
    maxLength: 32000,
    tokenLimit: 8000,
  },
  [OpenAIModelID.BING]: {
    id: OpenAIModelID.BING,
    name: 'BING',
    maxLength: 32000,
    tokenLimit: 8000,
  },
  [OpenAIModelID.CLAUDE_2]: {
    id: OpenAIModelID.CLAUDE_2,
    name: 'CLAUDE-2',
    maxLength: 100000,
    tokenLimit: 25000,
  },
};

export interface OpenAIFunction {
  name: string;
  description: string;
  parameters: {
    type: string;
    properties: {
      [key: string]: {},
    },
    required: string[];
  };
}

export interface OpenAIFunctionList {
  [name: string]: OpenAIFunction;
}
