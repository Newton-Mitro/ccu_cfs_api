import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Patch,
  Post,
  Query,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { JwtAuthGuard } from '../../../access-control/auth/guards/jwt-auth.guard';
import { FindAllQueryRequest } from '../../../common/application/contract/find-all-query.dto';
import {
  HttpMethod,
  LinkObject,
} from '../../../common/application/contract/link-object';
import { AuthUserType } from '../../../common/domain/types/auth-user.type';
import { CreateOrganizationRequest } from '../application/contract/requests/create-organization.request';
import { UpdateOrganizationRequest } from '../application/contract/requests/update-organization.request';
import { OrganizationDTO } from '../application/contract/responses/dto/organization.dto';
import { OrganizationsService } from '../application/services/organizations.service';

@Controller('organizations')
export class OrganizationsController {
  constructor(private readonly organizationsService: OrganizationsService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(
    @Req() req: Request,
    @Res() response: Response,
    @Body() createOrganizationRequest: CreateOrganizationRequest,
  ) {
    const user: any = req['user'];
    const authUser: AuthUserType = {
      id: user?.id,
      username: user?.username,
      name: '',
      personId: '',
    };

    const organizations = this.organizationsService.create(
      authUser,
      new Date(),
      new Date(),
      createOrganizationRequest,
    );

    return response
      .status(HttpStatus.CREATED)
      .json({ data: 'Organization created successfully.' });
  }

  @Get()
  async findAll(
    @Query() findAll: FindAllQueryRequest,
    @Res() response: Response,
    @Req() req: Request,
  ) {
    const organizations = await this.organizationsService.findAll(findAll);

    return response.status(HttpStatus.OK).json({
      data: organizations.map((organization: OrganizationDTO) => {
        return {
          ...organization,
          links: [
            new LinkObject(
              'View',
              `http://${req.headers.host}/organizations/${organization.organization_id}`,
              HttpMethod.GET,
            ),
            new LinkObject(
              'Update',
              `http://${req.headers.host}/organizations/${organization.organization_id}`,
              HttpMethod.PATCH,
            ),
            new LinkObject(
              'Delete',
              `http://${req.headers.host}/organizations/${organization.organization_id}`,
              HttpMethod.DELETE,
            ),
          ],
        };
      }),
      paginate: [
        new LinkObject('First', '', HttpMethod.GET),
        new LinkObject('Last', '', HttpMethod.GET),
        new LinkObject('Next', '', HttpMethod.GET),
        new LinkObject('Previous', '', HttpMethod.GET),
      ],
    });
  }

  @Get(':id')
  async findOne(
    @Param('id') id: string,
    @Res() response: Response,
    @Req() req: Request,
  ) {
    const organization = await this.organizationsService.findOne(id);

    return response.status(HttpStatus.OK).json({
      data: {
        ...organization,
        links: [
          new LinkObject(
            'View',
            `http://${req.headers.host}/organizations/${organization.organization_id}`,
            HttpMethod.GET,
          ),
        ],
      },
    });
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Req() req: Request,
    @Res() response: Response,
    @Body() updateOrganizationRequest: UpdateOrganizationRequest,
  ) {
    const user: any = req['user'];
    this.organizationsService.update(
      user?.id,
      new Date(),
      id,
      updateOrganizationRequest,
    );

    return response
      .status(HttpStatus.OK)
      .json({ data: 'Person updated successfully.' });
  }

  @Delete(':id')
  remove(@Param('id') id: string, @Res() response: Response) {
    this.organizationsService.remove(id);

    return response
      .status(HttpStatus.OK)
      .json({ data: 'Person deleted successfully.' });
  }
}
