import { ref } from 'vue';
import { defineStore } from 'pinia';
import { useRouter } from 'vue-router';
const router = useRouter();
export const useAuthStore = defineStore('authStore', () => {
  interface IUserData {
    username: string;
    accessToken: null | string;
    refreshToken: null | string;
    tokenType: string;
    exp: Date | null;
    iat: Date | null;
    iss: string;
    jti: string;
    orgId: string;
    bitPermissionMask: Array<string>;
    sub: string;
    employee: IEmployee;
  }

  interface IEmployee {
    organizationId: string;
    no: string;
    chName: string;
    enName: string;
    title: string;
  }

  const user = ref<IUserData>({
    accessToken: null,
    bitPermissionMask: [],
    orgId: '',
    username: '',
    refreshToken: '',
    tokenType: '',
    exp: null,
    iat: null,
    iss: '',
    jti: '',
    sub: '',
    employee: {
      organizationId: '',
      no: '',
      chName: '',
      enName: '',
      title: '',
    },
  });

  //根據API 分次Partial塞入不同的值
  function updateUserInfo(updates: Partial<IUserData>) {
    user.value = { ...user.value, ...updates };
  }

  function isLoggedIn() {
    return user.value.accessToken !== '';
  }

  //登出
  async function logout() {
    user.value.accessToken = null;
    router.replace('/login');
    localStorage.clear();
    sessionStorage.clear();
  }

  function $reset() {
    user.value = {
      accessToken: null,
      bitPermissionMask: [],
      orgId: '',
      username: '',
      refreshToken: '',
      tokenType: '',
      exp: null,
      iat: null,
      iss: '',
      jti: '',
      sub: '',
      employee: {
        organizationId: '',
        no: '',
        chName: '',
        enName: '',
        title: '',
      },
    };
  }

  return {
    user,
    updateUserInfo,
    logout,
    isLoggedIn,
    $reset,
  };
});
