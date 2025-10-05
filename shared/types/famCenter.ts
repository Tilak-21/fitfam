export interface FamGroup {
  id: string;
  name: string;
  joinCode: string;
  createdBy: string;
  members: string[]; // User IDs
  createdAt: Date;
}

export interface FamMemberStats {
  userId: string;
  name: string;
  profileImage?: string;
  totalWorkouts: number;
  weeklyWorkouts: number;
  currentStreak: number;
}

export interface JoinFamData {
  joinCode: string;
}

export interface CreateFamData {
  name: string;
}
