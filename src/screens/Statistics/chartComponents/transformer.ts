import { UserToCompletedChore } from '../../../../assets/Data/types';
import { getColorForAvatar } from '../../../../assets/avatarColorConfig';
import { User } from '../../../data';
import { Chore } from '../../../redux/slices/choreSlice';

interface Input {
  users: User[];
  chores: Chore[];
  completed: UserToCompletedChore[];
}

interface PieChartData {
  value: number;
  text: string;
  color: string;
}

export default function transformer(input: Input): PieChartData[] {
  const output: PieChartData[] = [];
  input.users.forEach(({ id, avatar }) => {
    const completedChores = input.completed.filter(
      (completed) => completed.userId === id,
    );
    const completedChoresCount = completedChores.length;
    const color = getColorForAvatar(avatar);
    output.push({ value: completedChoresCount, text: avatar, color });
  });
  return output;
}

export function transformChoreSpecific(
  input: Input,
  choreId: string,
): PieChartData[] {
  const output: PieChartData[] = [];
  input.users.forEach(({ id, avatar }) => {
    const completedChores = input.completed.filter(
      (completed) => completed.userId === id && completed.choreId === choreId,
    );
    const completedChoresCount = completedChores.length;
    const color = getColorForAvatar(avatar);
    output.push({ value: completedChoresCount, text: avatar, color });
  });
  return output;
}
