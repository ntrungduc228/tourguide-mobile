/// <reference types="nativewind/types" />

type Nav = {
  navigate: (value: string, params?: ParamListBase) => void;
  goBack: () => void;
};
